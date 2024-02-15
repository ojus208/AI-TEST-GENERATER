
from http import client
import json
from openai import OpenAI

client = OpenAI(api_key="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")


def generate_questions_openai(topic, level, number_of_question):

    prompt_text = f"generate {number_of_question} multiple choice question with answer on topic {topic} with hardness level {level} and response should be in format like " + """{"questions":[{"question":"question text","option1":"option","option2":"option","option3":"option","option4":"option","answer":"option"}]}"""

    response = client.chat.completions.create(
  model="gpt-3.5-turbo-0125",
#   response_format={ "type": "json_object" },
  messages=[

    {"role": "user", "content": prompt_text}
  ],
  seed=123
)
    print(response)
    data =  response.choices[0].message.content
    return json.loads(data)






