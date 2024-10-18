import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const questions = [
    {
        question: "Bem-vindo ao JUDBR! Como posso ajudar você hoje?",
        options: [
            "Sim, eu estou considerando o JUDBR para o meu escritório",
            "Apenas navegando",
            "Eu sou um usuário do JUDBR, estou procurando por assistência"
        ]
    },
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot'; options?: string[] }[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [waitingForEmail, setWaitingForEmail] = useState(false);

    useEffect(() => {
        // Limpa o localStorage ao carregar a página
        localStorage.removeItem('chatMessages');
        localStorage.removeItem('chatIsOpen');
        localStorage.removeItem('chatWaitingForEmail');

        if (isOpen && messages.length === 0) {
            setMessages([{ text: questions[0].question, sender: 'bot', options: questions[0].options }]);
        }
    }, [isOpen]);

    useEffect(() => {
        // Salva o estado da conversa no localStorage
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        localStorage.setItem('chatIsOpen', JSON.stringify(isOpen));
        localStorage.setItem('chatWaitingForEmail', JSON.stringify(waitingForEmail));
    }, [messages, isOpen, waitingForEmail]);

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
            setInputMessage('');
            processUserInput(inputMessage);
        }
    };

    const processUserInput = (input: string) => {
        console.log(input);
        if (waitingForEmail) {
            handleEmailResponse(input);
            return;
        }
    
        switch (input) {
            case "Sim, eu estou considerando o JUDBR para o meu escritório":
                botResponse("Maravilha!", "Você poderia me mandar seu email?");
                setWaitingForEmail(true);
                break;
            case "Apenas navegando":
                botResponse("Entendido! Você poderia me mandar seu email (Caso você se desconecte)?");
                setWaitingForEmail(true);
                break;
            case "Eu sou um usuário do JUDBR, estou procurando por assistência":
                botResponse("Ok! Você poderia me mandar seu email (Caso você se desconecte)?");
                setWaitingForEmail(true);
                break;
            default:
                botResponse("Desculpe, não entendi. Pode repetir?");
        }
    };
    
    const handleEmailResponse = (email: string) => {
        if (email.includes("@")) {
            const lastUserChoice = messages.find(m => m.sender === 'user' && m.text !== email)?.text;
            switch (lastUserChoice) {
                case "Sim, eu estou considerando o JUDBR para o meu escritório":
                    botResponse("Obrigado! Você receberá no seu email mais informações!");
                    break;
                case "Apenas navegando":
                    botResponse("Obrigado! Fique à vontade para continuar navegando");
                    break;
                case "Eu sou um usuário do JUDBR, estou procurando por assistência":
                    botResponse("Obrigado! A assistência entrará em contato com você");
                    break;
                default:
                    botResponse("Obrigado pelo seu email!");
            }
            setWaitingForEmail(false);
        } else {
            botResponse("Por favor, forneça um email válido.");
        }
    };

    const botResponse = (...responses: string[]) => {
        responses.forEach((response, index) => {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
            }, index * 1000);
        });
    };

    const handleOptionClick = (option: string) => {
        setMessages(prev => [...prev, { text: option, sender: 'user' }]);
        processUserInput(option);
    };

    return (
        <div className="fixed bottom-4 right-4">
          {isOpen ? (
            <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
              <div className="bg-judbr-main text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                  <Image src="/image/judbr-white.png" alt="JUDBR Logo" width={100} height={100} />
                  {/* <span className="ml-2 text-lg font-bold">JUDBR</span> */}
                </div>
                <button onClick={toggleChatBot} className="text-white hover:text-gray-200">
                  X
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-judbr-main flex items-center justify-center text-white mr-2">
                        J
                      </div>
                    )}
                    <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                      <span className={`inline-block p-3 rounded-lg ${
                        message.sender === 'user' ? 'bg-judbr-main text-white' : 'bg-gray-200 text-black'
                      }`}>
                        {message.text}
                      </span>
                    </div>
                  </div>
                ))}
                {messages[messages.length - 1]?.options && (
                   <div className="mt-2">
                   {messages[messages.length - 1].options?.map((option, optionIndex) => (
                     <button
                       key={optionIndex}
                       onClick={() => handleOptionClick(option)}
                       className="bg-judbr-main text-white pl-3 pr-5 py-2 rounded-lg mr-2 mb-2 text-sm w-full text-left"
                     >
                       {option}
                     </button>
                   ))}
                 </div>
                )}
              </div>
              <div className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem..."
                    className="flex-grow border rounded-l-lg p-2"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-[#24B364] text-white mr-2 ml-2 px-4 py-2 rounded-r-lg hover:bg-green-400"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={toggleChatBot}
              className="bg-judbr-main text-white p-4 rounded-full shadow-lg hover:bg-purple-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          )}
        </div>
      );
    }