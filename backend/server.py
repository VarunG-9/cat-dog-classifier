from flask import Flask, request
import os
from eval import *

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    if 'file' not in request.files:
        return 'No file part', 400
    
    file = request.files['file']

    if file.filename == '':
        return 'No selected file', 400
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    print(f"File '{file.filename}' received and saved to '{file_path}'.")
    pred = evaluate(file_path)
    return pred, 200


if __name__ == "__main__":
    app.run(debug=True)
