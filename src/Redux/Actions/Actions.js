import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://gorca.somee.com/api',
});
//Optencion de datos de los clientes
export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await apiClient.get('/Clientes');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Optencion de datos de un cliente
export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id) => {
        try
        {      
            const resp = await apiClient.get(`/Clientes/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para eliminar un Cliente
export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id) => {
        try {
            const resp = await apiClient.delete(`/Clientes/${id}`);
            return resp.data;
        } catch (error) {
            throw new Error(error);
        }
    }
);
//Action para agregar un Cliente
export const addUser = createAsyncThunk("users/addUser",
    async (data) => {
        try
        {      
            const resp = await apiClient.post('/Clientes', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar un Cliente
export const editUSer = createAsyncThunk("users/editUSer",
    async (data) => {
        try
        {      
            const resp = await apiClient.put(`/Clientes/${data.idCliente}`, data);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);


//Action para optener los datos de los empleados
export const getEmployees = createAsyncThunk("employees/getEmployees",
    async () => {
        try
        {      
            const resp = await apiClient.get('/Empleados');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para optener los datos de un empleado
export const getEmployeeUnique = createAsyncThunk("employees/getEmployeeUnique",
    async (id) => {
        try
        {      
            const resp = await apiClient.get(`/Empleados/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para borrar a un empleado
export const deleteEmployee = createAsyncThunk("employees/deleteEmployee",
    async (id) => {
        try
        {      
            const resp = await apiClient.delete(`/Empleados/${id}`);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para agregar a un empleado
export const addEmployee = createAsyncThunk("employees/addEmployee",
    async (data) => {
        try
        {      
            const resp = await apiClient.post('/Empleados', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar a un empleado
export const editEmployee = createAsyncThunk("employees/editEmployee",
    async (data) => {
        try
        {      
            const resp = await apiClient.put(`/Empleados/${data.idEmp}`, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

//Action para optener los datos de los Producto
export const getProducs = createAsyncThunk("producs/getProducs",
    async () => {
        try
        {      
            const resp = await apiClient.get('/Productos');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para optener los datos de un Producto
export const getProducUnique = createAsyncThunk("producs/getProducUnique",
    async (id) => {
        try
        {      
            const resp = await apiClient.get(`/Productos/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para borrar a un Producto
export const deleteProduc = createAsyncThunk("producs/deleteProduc",
    async (id) => {
        try
        {      
            const resp = await apiClient.delete(`/Productos/${id}`);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para agregar a un Producto
export const addProduc = createAsyncThunk("producs/addProduc",
    async (data) => {
        try
        {      
            const resp = await apiClient.post('/Productos', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar a un Producto
export const editProduc = createAsyncThunk("producs/editProduc",
    async (data) => {
        try
        {      
            const resp = await apiClient.put(`/Productos/${data.idProd}`, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

//Action para agregar a un Venta
export const addVenta = createAsyncThunk("sale/addVenta",
    async (data) => {
        try
        {      
            const resp = await apiClient.post('/Venta/RealizarVenta', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);