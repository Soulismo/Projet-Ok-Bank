// Creation de la slice de conexion

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
  },
  reducers: {
    //Action pour connecter l'utilisateur
    loginUser: (state, action) => {
      state.userToken = action.payload; // Stokera les informations avec dispatch
    },
    // Action pour deconecter l'utilisateur
    logoutUser: (state) => {
      state.userToken = null; // Remet a zéro les information user
      state.userProfil = null;
    },
    //Action pour stoker les données utilisateur
    infoUser: (state, action) => {
      state.userProfil = action.payload; // Stokera les informations avec dispatch
    },
    //Action pour stoker les données utilisateur
    infoUserName: (state, action) => {
      console.log("voici le payload info user Name :", action.payload);
      state.userProfil.userName = action.payload; // Stokera les informations avec dispatch
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice;
