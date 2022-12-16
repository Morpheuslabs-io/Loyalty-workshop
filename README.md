<h3 id="readme_start">Register ML SEED Account</h3>

- Please follow [this slide](https://docs.google.com/presentation/d/1utNWycRksqtDWLN9p8z2pwjGqRQdJq_GDpVQpbYzgrU/edit?usp=sharing) to register 30-days trial account with MorpheusLabs. It's absolutely free

- Once you've done registration, click on our logo to automatically create a working space and RPC Node that would be used in this experiment

<p align="center">
    <a href="https://bps.morpheuslabs.io/pages/uploadproject/?f=factorycmbkd9ozkhj7tnby&p=https%3A%2F%2Fgithub.com%2FMorpheuslabs-io%2FLoyalty-workshop.git&installNode=true&startResources=true">
        <img src="https://morpheus-seed.infura-ipfs.io/ipfs/QmdLQKk1ygXJLN9aLp5gmyUi7sz51Cv8nY4dCgLWTiUr6R">
    </a>
</p>

<h3>Prerequisites</h3>

- Require Metamask wallet, and two accounts with available balances. Follow <a href="./markdown/funding.md#install_metamask">this</a> to create and fund your accounts

**WARNING**: 
- DO NOT share private keys to anyone even these accounts only use for testing purpose
- DO NOT use your main accounts
- Recommend to create brand new accounts in this experiment 

<h3 id="installation">Installation</h3>

- Install dependencies by running this command:

```bash
cd Loyalty-workshop
yarn
```

- Copy RPC Node API and paste into `hardhat.config.js`

<p align="center">
    <img src="./images/img15.png" alt="Copy RPC Node" width="70%" height="100%"> 
</p>

<p align="center">
    <img src="./images/img16.png" alt="Replace hardhat.config.js" width="70%" height="100%"> 
</p>

- Once you have completed creating Metamask wallet and funding your accounts, it requires to create an environement file
    - Create the `.env` file
    - Find `env.example`, then open and copy all content in this file
    - Paste copied content into `.env` file
    - Next, you need private keys of two funded accounts to be pasted into `.env` file
    <p align="center">
        <img src="./images/img8.png" alt="env file" width="70%" height="100%"> 
    </p>

    - Open your Metamask wallet -> click on three dots -> choose `Account details`
    <p align="center">
        <img src="./images/img9.png" alt="account details" width="20%" height="10%"> 
    </p>

    - Choose `Export private keys`, then you will be prompted to type your Metamask wallet password
    <p align="center">
        <img src="./images/img10.png" alt="account details" width="20%" height="10%"> 
    </p>

    - Type your password and click on `Confirm` button
    - Copy your private key to either `DEPLOYER` or `ACCOUNT` in the `.env` file
    <p align="center">
        <img src="./images/img11.png" alt="account details" width="20%" height="10%"> 
    </p>

    - Repeat these step for the last private key

- Compile smart contracts

```bash
yarn compile
```

Now, it's all set and ready to run an experiment

<p align="center">
    <a href="./markdown/experiment.md#experiment_start">Let's move on</a>
</p>