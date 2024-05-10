// Função para calcular o fatorial de um número inteiro positivo
function calcular_fatorial(numero) {
    if (numero < 0) {
        return "Erro: Não é possível calcular o fatorial de um número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Função para gerar a sequência de Fibonacci
function gerar_sequencia_fibonacci(numero_limite) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] <= numero_limite) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    return fibonacci;
}

// Interface do usuário
const numero_digitado = prompt("Digite um número inteiro positivo:");
const numero = parseInt(numero_digitado);

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Por favor, insira um número inteiro positivo válido.");
} else {
    const fatorial = calcularFatorial(numero);
    const sequencia_fibonacci = gerar_sequencia_fibonacci(numero);

    console.log(`Fatorial de ${numero}: ${fatorial}`);
    console.log(`Sequência de Fibonacci até ${numero}: ${sequencia_fibonacci.join(", ")}`);
}
