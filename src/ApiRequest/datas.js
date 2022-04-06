import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGM5ZGQ2MjA0ZGQyNjZkYTExYjFiMGEzYjcwYzYzOSIsInN1YiI6IjYyNGMwZDI0M2M0MzQ0MDBhNTYwOTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD1fqEKPgFgshFN-cdbAHIGaMr7uC4avcwzFCA66Iio"

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
})