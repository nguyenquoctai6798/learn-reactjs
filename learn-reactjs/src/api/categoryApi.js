import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params) {
        const url = '/categories'
        axiosClient.get(url, params)
    },
    get(id) {
        const url = `categories/${id}`
        axiosClient.get(url)
    },
    add(data) {
        const url = 'categories'
        axiosClient.post(url, data)
    },
    update(data) {
        const url = `categories/${data.id}`
        axiosClient.put(url, data)
    },
    remove(id) {
        const url = `categories/${id}`
        axiosClient.delete(url)
    }
}