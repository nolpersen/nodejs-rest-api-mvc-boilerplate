# NodeJs Rest API MVC Boilerplate
Rest Api Boilerplate for NodeJS with MVC Architecture
Example case CRUD User

### Library

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [express](https://expressjs.com/)
- [sequelize](https://sequelize.org/docs/v6/)

### How to Install

#### Clone Repo
`$ git clone <repo_url>`

#### Setup database config (mysql)
- Rename .env_example to .env and change its value

#### Install

```bash
npm install
npm install --save-dev sequelize-cli
sequelize db:migrate
```

#### Run Application
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Api End Point
- List User (Get): [http://localhost:3000/api/users](http://localhost:3000/api/users)
- Store User (Post): [http://localhost:3000/api/user/store](http://localhost:3000/api/user/store)
- Show User (Get): [http://localhost:3000/api/user/:id](http://localhost:3000/api/user/1)
- Update User (Put): [http://localhost:3000/api/user/update/:id](http://localhost:3000/api/user/update/1)
- Delete User (Delete): [http://localhost:3000/api/user/delete/:id](http://localhost:3000/api/user/delete/1)

## Author

- [Rizali](https://github.com/nolpersen)

## License

MIT

---







