
// trocar os valores de duas posições de um vetor, 
// tendo como parâmetros de entrada o vetor e as posições
const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

// embaralhar os elementos de um vetor, 
// tendo como parâmetros de entrada o vetor e a quantidade de trocas
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        swap(array, i, j);
    }
 };

// ordenar um vetor de inteiros com o algoritmo Bubble Sort, 
// tendo como parâmetro de entrada o vetor de inteiros
const bubble_sort = (arr) => {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// ordenar um vetor de inteiros utilizando o algoritmo Selection Sort, 
// tendo como parâmetro de entrada o vetor de valores inteiros
const selection_sort = (arr) => {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

// ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo, 
// tendo como parâmetros o vetor, posição inicial e posição final
const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const partitionIndex = partition(array, low, high);
        quick_sort(array, low, partitionIndex - 1);
        quick_sort(array, partitionIndex + 1, high);
    }
    return array;
};

// apoio a quick_sort, tendo como parâmetros o vetor, 
// posição inicial, posição final e valor do pivot
const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

// Exemplo de uso
//const array = [7, 2, 1, 6, 8, 5, 3, 4];
//console.log("Array original:", array);
//console.log("Array ordenado:", quick_sort(array.slice())); // Usando slice() para não modificar o array original
//console.log("Array ordenado:", quick_sort(array)); // Usando slice() para não modificar o array original
//console.log("Array ordenado:", quick_sort(array, 0, array.length - 1)); // Usando slice() para não modificar o array original