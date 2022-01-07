const CustomExpress = require ('./config/customExpress')
const app = CustomExpress ()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))