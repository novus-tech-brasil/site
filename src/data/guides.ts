export interface GuideSection {
	id: string;
	h2: string;
	paragraphs?: string[];
	list?: { type: "ul" | "ol"; items: string[] };
	after?: string[];
}

export interface Guide {
	slug: string;
	title: string;
	h1: string;
	description: string;
	excerpt: string;
	published: string;
	readMinutes: number;
	audience: "autoescolas" | "instrutores" | "alunos";
	sections: GuideSection[];
	faqs: { question: string; answer: string }[];
	cta: { title: string; text: string; message: string };
}

export const guides: Guide[] = [
	{
		slug: "sistema-para-autoescola",
		title: "Sistema para Autoescola: guia completo",
		h1: "Sistema para autoescola: o que é, para que serve e o que ele deve ter",
		description:
			"O que é um sistema de gestão para autoescola, quais funções são essenciais (agenda, alunos, instrutores, veículos) e como escolher o ideal para o seu CFC.",
		excerpt: "O que é um sistema de gestão para autoescola, quais funções são essenciais e como escolher o ideal para o seu CFC.",
		published: "2026-10-01",
		readMinutes: 6,
		audience: "autoescolas",
		sections: [
			{
				id: "o-que-e",
				h2: "O que é um sistema para autoescola?",
				paragraphs: [
					"Um sistema para autoescola (também chamado de software de gestão para CFC) é uma ferramenta que reúne, em um só lugar, as tarefas do dia a dia de um centro de formação de condutores: a agenda de aulas, o cadastro de alunos, a escala de instrutores e o uso dos veículos.",
					"A ideia central é simples: em vez de cada informação morar em um caderno, em uma planilha ou em uma conversa de mensagens, toda a equipe consulta a mesma fonte. Isso reduz retrabalho e evita o clássico desencontro entre aluno, instrutor e carro.",
				],
			},
			{
				id: "para-que-serve",
				h2: "Para que serve na prática?",
				paragraphs: ["Na rotina de um CFC, um sistema de gestão ajuda principalmente a:"],
				list: {
					type: "ul",
					items: [
						"enxergar o dia inteiro em uma única agenda, com aluno, instrutor e veículo de cada aula;",
						"evitar horários sobrepostos entre instrutores e veículos;",
						"manter o histórico de aulas de cada aluno à mão, sem depender de anotações;",
						"receber pedidos de aula de forma organizada, em vez de perdidos no meio de conversas;",
						"dar à gestão uma visão geral da operação.",
					],
				},
			},
			{
				id: "funcionalidades-essenciais",
				h2: "Funcionalidades essenciais de um bom sistema",
				paragraphs: ["Ao avaliar uma opção, confira se ela cobre o básico da operação:"],
				list: {
					type: "ol",
					items: [
						"Agenda de aulas: horários, alunos, instrutores e veículos relacionados entre si.",
						"Cadastro de alunos: dados, categoria e histórico de aulas em um só lugar.",
						"Gestão de instrutores: cada instrutor acompanha seus horários e compromissos.",
						"Controle de veículos: disponibilidade da frota junto com a agenda.",
						"Agendamento pelo celular: o aluno consulta as opções e solicita aulas sem precisar ligar.",
						"Visão da operação: a gestão acompanha tudo sem precisar juntar informações de vários lugares.",
					],
				},
			},
			{
				id: "como-escolher",
				h2: "Como escolher o sistema certo para o seu CFC",
				paragraphs: ["Algumas perguntas ajudam a comparar as opções com critério:"],
				list: {
					type: "ul",
					items: [
						"A equipe consegue usar no dia a dia sem treinamento longo?",
						"Funciona pelo navegador, sem instalação, e no celular do aluno?",
						"A agenda cruza aluno, instrutor e veículo de verdade?",
						"Existe atendimento humano para tirar dúvidas?",
						"A empresa por trás é identificável (CNPJ, contato direto) e tem clientes em operação?",
					],
				},
			},
			{
				id: "novus-cfc",
				h2: "Onde o Novus CFC se encaixa",
				paragraphs: [
					"O Novus CFC foi feito para a rotina de autoescolas: reúne agenda, alunos, instrutores e veículos e permite que o aluno solicite aulas pelo celular. Hoje, 20 autoescolas usam o sistema, com mais de 5.000 alunos cadastrados e mais de 1 milhão de aulas marcadas e feitas.",
					"Quer ver como ele funciona na sua operação? Conheça a [página para autoescolas](/autoescolas) ou fale com a equipe pelo WhatsApp e agende uma demonstração.",
				],
			},
		],
		faqs: [
			{ question: "O que é um sistema para autoescola?", answer: "É um software que reúne agenda de aulas, cadastro de alunos, instrutores e veículos de um CFC em um só lugar, para a equipe trabalhar com a mesma informação." },
			{ question: "Preciso instalar um sistema de gestão de autoescola?", answer: "Depende da solução. O Novus CFC é um sistema web, acessado pelo navegador, sem necessidade de instalação." },
			{ question: "O aluno consegue pedir aula pelo celular?", answer: "Nos sistemas que oferecem agendamento online, sim. No Novus CFC, o aluno consulta as opções disponibilizadas pelo CFC e solicita aulas pelo celular." },
		],
		cta: {
			title: "Quer ver um sistema para autoescola funcionando?",
			text: "Agende uma demonstração guiada pelo WhatsApp.",
			message: "Olá! Li o guia sobre sistema para autoescola e quero conhecer o Novus CFC.",
		},
	},
	{
		slug: "como-organizar-a-agenda-de-uma-autoescola",
		title: "Como Organizar a Agenda de uma Autoescola",
		h1: "Como organizar a agenda de uma autoescola: passo a passo",
		description:
			"Aprenda a organizar a agenda de aulas de uma autoescola cruzando aluno, instrutor e veículo, evitando horários sobrepostos e reduzindo o vai e vem de mensagens.",
		excerpt: "Passo a passo para cruzar aluno, instrutor e veículo, evitar horários sobrepostos e reduzir o vai e vem de mensagens.",
		published: "2026-10-01",
		readMinutes: 5,
		audience: "autoescolas",
		sections: [
			{
				id: "por-que",
				h2: "Por que a agenda é o coração da autoescola",
				paragraphs: [
					"Toda aula prática depende de três coisas ao mesmo tempo: um aluno, um instrutor e um veículo. Quando uma delas falha ou se sobrepõe a outra aula, o horário se perde. Por isso, organizar a agenda é a tarefa que mais impacta a rotina de um CFC.",
				],
			},
			{
				id: "passo-a-passo",
				h2: "Passo a passo para organizar a agenda",
				list: {
					type: "ol",
					items: [
						"Centralize tudo em uma única agenda. Enquanto houver caderno, planilha e conversas paralelas, haverá informação desencontrada.",
						"Cruze aluno, instrutor e veículo em cada aula. A agenda precisa mostrar os três ao mesmo tempo.",
						"Defina as janelas de disponibilidade de cada instrutor e de cada veículo, para saber o que está livre.",
						"Deixe o aluno solicitar a aula e a equipe confirmar. Assim os pedidos chegam organizados, e não soltos em mensagens.",
						"Registre cada aula feita. O histórico mostra o andamento do aluno e evita dúvidas sobre o que já aconteceu.",
						"Revise o dia seguinte e a semana. Um olhar rápido na agenda antecipa conflitos e horários vagos.",
					],
				},
			},
			{
				id: "erros-comuns",
				h2: "Erros comuns que bagunçam a agenda",
				list: {
					type: "ul",
					items: [
						"manter mais de uma agenda (por exemplo, a da recepção e a de cada instrutor, separadas);",
						"combinar horários por mensagem e não registrar em lugar nenhum;",
						"não relacionar o veículo ao horário, e descobrir o conflito só na hora;",
						"não ter histórico das aulas já feitas por cada aluno.",
					],
				},
			},
			{
				id: "com-sistema",
				h2: "Como um sistema ajuda a manter a agenda em ordem",
				paragraphs: [
					"Um sistema de gestão faz o cruzamento de aluno, instrutor e veículo por você e deixa a agenda visível para toda a equipe. No Novus CFC, o aluno solicita a aula pelo celular, a equipe organiza o horário e a aula entra na agenda.",
					"Veja como isso funciona na [página para autoescolas](/autoescolas) ou leia também o guia [sistema para autoescola](/guias/sistema-para-autoescola).",
				],
			},
		],
		faqs: [
			{ question: "Como organizar a agenda de uma autoescola?", answer: "Centralize tudo em uma agenda única que cruze aluno, instrutor e veículo em cada aula, defina a disponibilidade de cada um, deixe o aluno solicitar a aula e registre cada aula feita." },
			{ question: "Como evitar horários sobrepostos de instrutores?", answer: "Usando uma agenda única em que cada aula mostre o instrutor e o veículo envolvidos. Assim o conflito aparece antes de o horário ser confirmado." },
		],
		cta: {
			title: "Quer uma agenda que cruza aluno, instrutor e veículo?",
			text: "Veja o Novus CFC em uma demonstração pelo WhatsApp.",
			message: "Olá! Li o guia sobre agenda de autoescola e quero conhecer o Novus CFC.",
		},
	},
	{
		slug: "como-controlar-suas-aulas-de-direcao",
		title: "Como Controlar suas Aulas de Direção",
		h1: "Como controlar suas aulas de direção: saldo, histórico e próximas aulas",
		description:
			"Veja como controlar suas aulas de direção: o que registrar, como calcular o saldo de aulas e como instrutores autônomos podem manter o histórico de cada aluno.",
		excerpt: "O que registrar, como calcular o saldo de aulas e como manter o histórico de cada aluno, sendo aluno ou instrutor autônomo.",
		published: "2026-10-01",
		readMinutes: 4,
		audience: "alunos",
		sections: [
			{
				id: "por-que-controlar",
				h2: "Por que controlar suas aulas de direção",
				paragraphs: [
					"Entre horários combinados, remarcações e aulas já feitas, é fácil perder a conta. Saber quantas aulas você já fez, quantas ainda faltam e quando é a próxima evita confusão e ajuda a planejar o seu aprendizado.",
				],
			},
			{
				id: "o-que-registrar",
				h2: "O que registrar a cada aula",
				list: {
					type: "ul",
					items: [
						"data e horário da aula;",
						"instrutor e veículo (ou categoria) usados;",
						"se a aula foi feita, está agendada ou foi remarcada;",
						"observações importantes sobre o que foi praticado.",
					],
				},
			},
			{
				id: "saldo",
				h2: "Como calcular o saldo de aulas",
				paragraphs: [
					"O saldo é simples: total de aulas contratadas menos as aulas já feitas. Por exemplo, se você contratou 20 aulas e já fez 8, restam 12. Manter esse número atualizado em um só lugar evita dúvidas na hora de agendar a próxima.",
				],
			},
			{
				id: "instrutores",
				h2: "Dica para instrutores autônomos",
				paragraphs: [
					"Se você é instrutor autônomo, o ideal é manter um histórico por aluno: quantas aulas cada um já fez, o que foi trabalhado e quais horários estão marcados. Isso facilita a organização do seu dia e a conversa com o aluno sobre o andamento.",
				],
			},
			{
				id: "novus-cfc",
				h2: "Como o Novus CFC ajuda",
				paragraphs: [
					"O Novus CFC reúne saldo, histórico e próximas aulas em um sistema web acessado pelo celular. Conheça a página [minhas aulas](/minhas-aulas), para quem quer controlar as próprias aulas, ou a página para [instrutores autônomos](/instrutores-autonomos), que já reúne mais de 80 profissionais.",
				],
			},
		],
		faqs: [
			{ question: "Como saber quantas aulas de direção já fiz?", answer: "Registrando cada aula feita e comparando com o total contratado. O saldo é o total de aulas contratadas menos as aulas já realizadas." },
			{ question: "O que um instrutor autônomo deve registrar de cada aluno?", answer: "Data e horário das aulas, quantas já foram feitas, o que foi praticado e quais horários estão marcados." },
		],
		cta: {
			title: "Quer ter suas aulas sempre à mão?",
			text: "Fale com a equipe pelo WhatsApp e veja como funciona.",
			message: "Olá! Li o guia sobre controle de aulas de direção e quero conhecer o Novus CFC.",
		},
	},
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
