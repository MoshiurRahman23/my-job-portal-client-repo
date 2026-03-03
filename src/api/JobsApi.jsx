export const jobCreatedByPromise = async email =>{
    const res = await fetch(`http://localhost:5000/jobs?email=${email}`)
    return res.data
}

