# Cat/Dog Image Classifier

This project is a web application that classifies images as either a cat or a dog with 95% accuracy. It uses a pretrained machine learning model built with **PyTorch** for the AI, and the frontend is developed using **React**, with the backend built using **Flask**. 

## Features
- Upload any image of a cat or dog
- Get the result of the classification with 95% accuracy
- Frontend built using React
- Backend built using Flask
- AI model powered by PyTorch, leveraging resnet18 as a pretrained model.

## Screenshots

<p float="left">
  <img src="https://github.com/user-attachments/assets/f49a201c-8bd4-4315-b807-268ebc4a65d7" width="45%" height=500px/>
  <img src="https://github.com/user-attachments/assets/62861025-0cc6-4e31-a8e7-2831b1def624" width="45%" height=500px /> 
</p>

## Installation

To run the project locally, follow these steps after making sure Python, npm, and node.js are installed.

### Frontend (React)

1. Clone the repository
   
   ```bash
   git clone https://github.com/VarunG-9/cat-dog-classifier.git
   ```
3. Navigate to the `frontend` directory
   
   ```bash
   cd cat-dog-classifier/frontend
   ```
5. Install dependencies
   
   ```bash
   npm install
   ```
7. Start the development server
   
   ```bash
   npm start
   ```

### Backend (Flask) - New Terminal

1. Navigate to the backend directory
   
  ```bash
  cd ../backend
  ```
2.Create a virtual environment and activate it

  ```bash
  python -m venv venv
  source venv/bin/activate  # For Windows use: venv\Scripts\activate
  ```
3. Install the required dependencies
   
  ```bash
  pip install -r requirements.txt
  ```
4. Start the Flask server
   
  ```bash
  python3 server.py # For Windows use: python server.py
  ```
### Model

- The PyTorch model is a pretrained one used for image classification, which is already set up in the project.
- If you'd like to see how the model was trained, you can check the Jupyter notebook `train.ipynb` in the repository. This notebook contains the code for training the classifier using transfer learning on a pretrained model.

### How to Use

1. Start both the React frontend and the Flask backend servers.
2. Open the frontend on `localhost:3000`.
3. Upload an image (either a cat or a dog).
4. The classifier will return the result on the screen with a confidence score.

## Accuracy
The model was trained using transfer learning on a pretrained model, and it achieves an accuracy of 95% on the test set.

## Tech Stack

- **Frontend**: React
- **Backend**: Flask
- **AI Model**: PyTorch (with resnet18)

## Future Improvements

- Deploying the app to a public server for easy access

## Contributing

Feel free to fork this repository and submit pull requests. Any contributions, whether bug fixes or new features, are welcome!
