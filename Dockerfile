FROM node:14-alpine 
#FROM node:14-alpine AS development
#ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Copy whole directory
COPY . .

RUN npm install

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]