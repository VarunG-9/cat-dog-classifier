import torch
from PIL import Image
from torchvision import transforms
import matplotlib.pyplot as plt
import matplotlib
import torch
import torch.nn as nn
import torchvision.models as models
import os
class CatOrDog(nn.Module):
    def __init__(self):
        super().__init__()
        # Load the pretrained ResNet model
        self.model = models.resnet18(pretrained=True)  # You can choose other models like resnet50, vgg16, etc.

        # Modify the final fully connected layer for binary classification
        num_features = self.model.fc.in_features
        self.model.fc = nn.Linear(num_features, 2)  # Change output layer to have 2 outputs (for cat and dog)

    def forward(self, x):
        return self.model(x)  # Forward pass through the ResNet model

def evaluate(file_path):
    classes = ["Cat", "Dog"]
    transform = transforms.Compose([
        transforms.Resize((128, 128)),
        transforms.ToTensor(),
    ])

    model = torch.load('./dogorcat.pth')
    model.eval()
    img = Image.open(file_path)
    if img.mode == 'RGBA':
        img = img.convert('RGB')
    img = transform(img)
    with torch.no_grad():
        pred = model(img.unsqueeze(0)).argmax(dim=1)
        pred_word = classes[pred[0]]
        os.remove(file_path)
        return pred_word 

