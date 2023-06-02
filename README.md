# Setup

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