import {writable} from 'svelte/store';
import { readable } from 'svelte/store';

export let imoveis = writable([])

export let imoveilAlow = writable([])

export let indice = writable([])

export let dataIm = writable([])

export let dataClient = writable([])

export let dataSale = writable([])