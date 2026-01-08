# Scanner Pokémon - Aplicativo de Leitura de QRCode para Pokémon

## 📱 Sobre o Projeto

Aplicativo desenvolvido como teste técnico para vaga de Desenvolvedor Mobile na REMOPT. O app realiza a leitura de QR Codes contendo IDs de Pokémon, consulta a [PokeAPI](https://pokeapi.co/) e exibe as informações do Pokémon correspondente.

## 🚀 Funcionalidades

- **Tela Inicial**: Exibe nome do desenvolvedor e botão para iniciar scanner.
- **Leitura de QR Code**: Utiliza a câmera do dispositivo para escanear QR Codes.
- **Consulta à PokeAPI**: Busca informações detalhadas do Pokémon pelo ID escaneado.
- **Exibição de Informações**: Mostra ID, nome, tipo(s) e imagem do Pokémon.
- **Navegação**: Permite voltar à tela inicial após a consulta.

## 🛠️ Tecnologias Utilizadas

- **React Native CLI** (0.72+)
- **TypeScript**
- **React Navigation** (navegação entre telas)
- **React Native Vision Camera** (leitura de QR Code)
- **Axios** (requisições HTTP)
- **Context API** (gerenciamento de estado global)

## 📋 Pré-requisitos

- Node.js (16+)
- Java JDK 11
- Android Studio (para emulador Android)
- Dispositivo Android físico ou emulador

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/KaykyFideliss/Scanner-Pokemon.git
cd Scanner-Pokemon

2. Instale as dependências:
npm install
# ou
yarn install

3.Para Android:
npx react-native run-android
```

### Dados extraídos da resposta
- `id` → Identificador do Pokémon  
- `name` → Nome do Pokémon  
- `types` → Tipos (concatenados quando houver mais de um)  
- `sprites.front_default` → URL da imagem frontal  

---

## 📊 Estado Global

Gerenciado com **Context API**, responsável por:

- Armazenar os dados do Pokémon atual
- Manter o histórico de Pokémon consultados
- Controlar estado de carregamento
- Gerenciar erros da API

---

## 🧪 Testes com QR Codes

O aplicativo foi testado com os seguintes QR Codes:

<img width="703" height="211" alt="image" src="https://github.com/user-attachments/assets/c139286f-f1c3-4912-b539-457a59efa299" />


---

## ✅ Requisitos Cumpridos

- Desenvolvimento com **React Native CLI**
- Uso de **TypeScript**
- Três telas conforme protótipo
- Leitura de QR Code funcional
- Integração com **PokeAPI**
- Exibição correta dos dados
- Navegação entre telas
- Estado global com **Context API**
- Funcionamento em **Android**

---

## 🚨 Permissões Necessárias

- 📷 **Câmera** — para leitura de QR Code  
- 🌐 **Internet** — para consulta à API  

---

## 📄 Licença

Este projeto foi desenvolvido como **teste técnico para a REMOPT**.

---

## 👤 Autor

**Kayky Fidelis**  
Desenvolvedor Mobile  
GitHub: [@KaykyFideliss](https://github.com/KaykyFideliss)                        
Linkedin :[Kayky Fidelis](www.linkedin.com/in/kaykyfidelis)

---

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do repositório no GitHub.
