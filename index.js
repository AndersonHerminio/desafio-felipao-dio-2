const numberVictoriesDefeats = (victory, defeats) => {
    return victory - defeats;
}

const winningBalance = numberVictoriesDefeats(91110, 1);

switch (true) {
    case winningBalance <= 10:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Ferro`);
        break;
        case winningBalance >= 11 && winningBalance <= 20:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Bronze`);
        break;
        case winningBalance >= 21 && winningBalance <= 50:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Prata`);
        break;
        case winningBalance >= 51 && winningBalance <= 80:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Ouro`);
        break;
        case winningBalance >= 81 && winningBalance <= 90:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Diamante`);
        break;
        case winningBalance >= 91 && winningBalance <= 100:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Lendário`);
        break;
        case winningBalance >= 101 && winningBalance <= 999:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e está no nível Imortal`);
        break;
    default:
        console.log(`O Herói tem o saldo de ${winningBalance} vitórias e é um deus`);
}
