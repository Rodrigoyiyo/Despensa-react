import React from 'react';
import { Header } from "./components/Header";
import {Simbolos} from './Simbolos';
import { Footer } from './components/Footer';
import { MainBody } from './components/MainBody';
import { HeaderBuscar } from './components/HeaderBuscar';

export const AppDespensa = () => {
    return (
        <>
            <Simbolos />
            <HeaderBuscar />
            <MainBody />
        </>
       
    );
}