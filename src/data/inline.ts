const escape = (value: string) =>
	value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Escapes text and turns [label](/path) into internal links. */
export const renderInline = (text: string) =>
	escape(text).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>');
