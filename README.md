# Quizz programação
Projeto criado com HTML, CSS e JavaScript puro. [Acessar aplicação](https://werlen-dev.web.app/Quizz/)
[![galeria](https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Fimages%2Fquizz.png?alt=media&token=8420e100-60b1-4653-8778-170bfcf61f9c)](https://werlen-dev.web.app/Quizz/)

Foi desenvolvido em JavaScript toda a lógica da aplicação para adicionar perguntas dinamicamente através de uma estrutura de array.

Foi praticado a manipulação de elementos no DOM do HTML através do QuerySelector, para acicionar as peguntas na pagina de forma dinamica.

Foi desenvovida a função para verificar se o usuário acertou ou errou a pergunta. A verificação é feira através do campo "correct" presente em cada pergunta que vem no formato de JSON. Se a resposta que o usuário marcar tiver o campo "correct" com o valor TRUE, é contabilizado o ponto.
![alt text](https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fquizz%2F02%20verifica%20resposta.png?alt=media&token=02612320-6e1e-4fac-a36d-fe55f380b43a)

É verificado se existe uma próxima pergunta. Se não existir, o programa chama a dunção d eexibir mensagem de parabens exibinto o total de acertos do usuário.
![alt text](https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fquizz%2F03show.png?alt=media&token=b0717220-d0e0-472e-af33-fcd36054d82c)
