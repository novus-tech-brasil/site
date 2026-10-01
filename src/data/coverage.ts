// DADOS DE EXEMPLO — distribuição fictícia por estado. Ajuste os números abaixo:
// o mapa recalcula as cores sozinho (quanto maior o valor no estado, mais escuro o roxo).
// Os totais de cada coluna devem bater com `stats` em company.ts (20 / 80 / 5.000).
export type CoverageType = "autoescolas" | "instrutores" | "usuarios";

export const coverage: Record<string, Partial<Record<CoverageType, number>>> = {
	SP: { autoescolas: 5, instrutores: 18, usuarios: 1250 },
	MG: { autoescolas: 3, instrutores: 11, usuarios: 720 },
	PR: { autoescolas: 2, instrutores: 9, usuarios: 540 },
	SC: { autoescolas: 2, instrutores: 6, usuarios: 410 },
	RS: { autoescolas: 2, instrutores: 7, usuarios: 380 },
	GO: { autoescolas: 2, instrutores: 4, usuarios: 330 },
	RJ: { autoescolas: 1, instrutores: 8, usuarios: 290 },
	BA: { autoescolas: 1, instrutores: 5, usuarios: 260 },
	MT: { autoescolas: 1, instrutores: 3, usuarios: 210 },
	MS: { autoescolas: 1, usuarios: 180 },
	ES: { instrutores: 3, usuarios: 140 },
	DF: { instrutores: 2, usuarios: 120 },
	CE: { instrutores: 2, usuarios: 100 },
	PE: { instrutores: 2, usuarios: 70 },
};
