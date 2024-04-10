import express from 'express';


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)

app.get('/', (req, res) => {
    res.send('Hello, this is the backend server!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});