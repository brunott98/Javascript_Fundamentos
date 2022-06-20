/*JavaScript define uma construtora RegExp() para criar objetos que representam padrões textuais 
esses padrões são descritos como expressões regulares, sendo que JavaScript adota a sintaxe de Perl para expressões 
regulares. Tanto as strings como os objetos RegExp tem métodos para fazer comparação de padrões e executar operações
de busca e troca usando expressões regulares.
Não são do tipo fundamental, e são utilizados para processamento de textos 

sua sintaxe literal é um texto entre par de barras normais,  a segunda barra normal do par tampode pode ser seguida
 por uma ou mais letras, as quais modificam o significado do padrão.  */

 /^HTML/     //Corresponde ás letras HTML no início de uma string

 

 let text = "123456789";
 let pattern = /[^1-5]/g;




console.log(text.match(pattern))	//retorna todos os que não são 1 até 5 [ '6', '7', '8', '9' ]
console.log(text.search(pattern))	// identifica a posição onde ocorre a primeira correspondencia logo 5 (posição do 6)
console.log(pattern.test(text))  //Verifica se existe correspondencia = logo true