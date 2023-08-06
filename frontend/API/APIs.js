const url = 'http://localhost:4000/';


export const get = async (type) => {
    try {
        const getdata = await fetch(`${url}${type}`)
        const data = await getdata.json()
        return data
    } catch (error) {
        return error;
    }
} 

export const getid = async (type, id) => {
    try {
        const getdata = await fetch(`${url}${type}/${id}`)
        const data = await getdata.json()
        return data
    } catch (error) {
        return error;
    }
}
export const post = async (type, data) => {
    try {
        const postdata = await fetch(`${url}${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res = await postdata.json()
        return res
    } catch (error) {
        return error;
    }
}
export const del = async (type, id) => {
    try {
        const deldata = await fetch(`${url}${type}/${id}`, {
            method: 'DELETE'
        })
        console.log('it worked');
    } catch (error) {
        return error;
    }
}
export const put = async (type, id, data) => {
    try {
        const putdata = await fetch(`${url}${type}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log('it worked');
    } catch (error) {
        return error;
    }
}


