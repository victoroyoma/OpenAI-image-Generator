# OpenAI-image-Generator
Learn how to generate or manipulate images with our DALL·E models

Introduction
The Images API provides three methods for interacting with images:

Creating images from scratch based on a text prompt
Creating edits of an existing image based on a new text prompt
Creating variations of an existing image
This guide covers the basics of using these three API endpoints with useful code samples. To see them in action, check out our DALL·E preview app.

The Images API is in beta. During this time the API and models will evolve based on your feedback. To ensure all users can prototype comfortably, the default rate limit is 20 images per minute, 50 per 5 minutes. If you would like to increase your rate limit, please review this help center article. We will increase the default rate limit as we learn more about usage and capacity requirements.
Usage
Generations
The image generations endpoint allows you to create an original image given a text prompt. Generated images can have a size of 256x256, 512x512, or 1024x1024 pixels. Smaller sizes are faster to generate. You can request 1-10 images at a time using the n parameter.

Read more here https://beta.openai.com/docs/guides/images/introduction

I Used Nodejs, ExpressJs and the OpenAI api for this project. 
