/**
 *Recolhe dados do formulário e mostra um prompt de confirmação
 * @param {Event} e objeto evento vindo do Form Input
 */
function handleSubmit(e) {
   e.preventDefault();
   let formData = new FormData(e.currentTarget);

   let nome = formData.get("nome");
   let email = formData.get("email");
   let assunto = formData.get("assunto");
   let mensagem = formData.get("mensagem");

   confirm(
      `Confirme suas informações:\n
      ${nome}
      ${email}
      ${assunto}
      ${encurtaTexto(mensagem)}`
   );
}

/**
 *Verifica se o parametro texto é maior que o length escolhido e retorna a string encurtada.
 * @param {string} texto texto a ser encurtado
 * @param {number} length number representando o tamanho limite do parametro texto
 * @returns {string} Texto encurtado caso passe caso passe do length escolhido.
 * @default length 25
 */
function encurtaTexto(texto, length = 25) {
   let textoReturn = texto.length > length ? texto.substring(0, length) : texto;

   return textoReturn.concat("...");
}

/**
 *Recebe uma `string` como parâmetro e retorna essa mesma string capitalizada
 * @param {string} string a ser capitalizada
 * @returns {string} `string` capitalizada (com a primeira letra maiúscula)
 */
function capitalize(string){
   let capitalizedString = string.replace(string.charAt(0), string.charAt(0).toUpperCase());

   return capitalizedString
}
