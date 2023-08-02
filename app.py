import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import requests
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import openai
from PyPDF2 import PdfReader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import ElasticVectorSearch, Pinecone, Weaviate, FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
import json
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

# Load the environment variables from .env file
load_dotenv(dotenv_path=".env")

# Get your API keys from openai, you will need to create an account. 
# Here is the link to get the keys: https://platform.openai.com/account/billing/overview
import os
os.environ["OPENAI_API_KEY"] = "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"

# location of the pdf file/files. 
reader = PdfReader('Sales_guide.pdf')

# read data from the file and put them into a variable called raw_text
raw_text = ''
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if text:
        raw_text += text


# We need to split the text that we read into smaller chunks so that during information retreival we don't hit the token size limits. 

text_splitter = CharacterTextSplitter(        
    separator = "\n",
    chunk_size = 1000,
    chunk_overlap  = 200,
    length_function = len,
)
texts = text_splitter.split_text(raw_text)

# Download embeddings from OpenAI
embeddings = OpenAIEmbeddings()

docsearch = FAISS.from_texts(texts, embeddings)

print(docsearch)

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

chain = load_qa_chain(OpenAI(), chain_type="stuff")


#Starting the Backend Fully
app = FastAPI()

# CORS settings to allow requests from the React frontend
origins = ["http://localhost:3000", "http://localhost:8000"]



app.add_middleware(
CORSMiddleware,
allow_origins=["*"], # Allows all origins
allow_credentials=True,
allow_methods=["*"], # Allows all methods
allow_headers=["*"], # Allows all headers
)


class InputData(BaseModel):
    query: str

@app.get("/")
def check_health():
    return {"OK"}



@app.post("/query")
def submit_data(input_data: InputData):
    #Write open AI code
    query = input_data.query
    docs = docsearch.similarity_search(query)
    answer = chain.run(input_documents=docs, question=query)


    # Handle the request and send the response
    return {"query" : answer}

@app.post("/query2")
def submit_data(input_data: InputData):
    #Write open AI code
    
    query = input_data.query
    memory.write(query)
    docs = docsearch.similarity_search(query)
    answer = chain.run(input_documents=docs, question=query)
    memory.write(answer)


    # Handle the request and send the response
    return {"query" : answer}

# Step 2: Create a route that accepts POST requests with JSON data
@app.post("/items/")
async def create_item(query: InputData):


    print(query.query)

    test = "hello la lune c'est le ciel comment ca va ca fait longtemps que je ne t'ai pas dormir sous le ciel bleu de toulouse, ca va etre complique pour moi de vivre plus longtemps • Utilize search engine optimization (SEO) to rank higher in organic search results and drive more organic traffic.• Develop an email marketing strategy to build relationships with customers and drive more conversions.• Invest in social media advertising to reach more potential customers and increase brand awareness."

    # item is already validated by Pydantic
    # Use the parsed JSON data as needed
    return {"query": test}