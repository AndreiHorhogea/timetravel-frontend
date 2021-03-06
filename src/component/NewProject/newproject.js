import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_CATEGORYS } from "./types";

export const createProject = (project, history,category_id) => async dispatch =>{
    try{
        await axios.post
        (`http://localhost:8080/api/project/category/${category_id}`,project);
        history.push(`/dashboard/blog/${category_id}`);
    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    })
};