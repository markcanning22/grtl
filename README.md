# Setup

## Development

1. Clone or download the code to your PhpstormProjects folder
    ```sh
    cd ~/PhpstormProjects/
    git clone git@github.com:markcanning22/grtl.git grtl
    ```
2. Install dependencies and run initial TS build of server
    ```sh
   cd grtl

   cd server
   npm install
   tsc

   cd ../client
   npm install
   ```
3. Start the client
    ```sh
    npm run dev
    ```
4. Start the server
    ```sh
    cd ../server
    npm run dev
    ```
   
## Build

**NOTE: Make sure the code is cloned or downloaded first!**

1. Build the client and start preview using Vite
   ```sh
   cd ~/PhpstormProjects/client
   npm run build
   npm run preview
   ```

2. Build the server and start the server
   ```sh
   cd ~/PhpstormProjects/server
   npm run build
   node ./dist/app.js
   ```