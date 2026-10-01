export const whatsappLink = (message: string) =>
	"https://wa.me/5517997437646?text=" + encodeURIComponent(message);

export const stats = {
	autoescolas: { value: 20, prefix: "", suffix: "", label: "autoescolas", caption: "usando o sistema" },
	alunos: { value: 5000, prefix: "+", suffix: "", label: "alunos", caption: "cadastrados" },
	instrutores: { value: 80, prefix: "+", suffix: "", label: "instrutores autônomos", caption: "organizando suas aulas" },
	aulas: { value: 1, prefix: "+", suffix: "M", label: "de aulas", caption: "marcadas e feitas" },
};

export const company = {
	name: "NovusTech",
	product: "Novus CFC",
	cnpj: "68.685.517/0001-03",
	phone: "(17) 99743-7646",
	phoneHref: "tel:+5517997437646",
	site: "https://thenovustech.com.br/",
	whatsapp:
		"https://wa.me/5517997437646?text=" +
		encodeURIComponent("Olá! Quero conhecer o Novus CFC e agendar uma demonstração."),
};
