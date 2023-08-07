from flask import Flask, jsonify
import openai

app = Flask(__name__)

openai.api_key = "sk-...cLCQ"

@app.route("/get-stoic-quote", methods=["GET"])
def get_stoic_quote():
    prompt = "Generate a stoic quote."
    response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=50)
    quote = response.choices[0].text.strip()
    return jsonify({"quote": quote})

if __name__ == "__main__":
    app.run()
