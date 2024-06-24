import { FC } from 'react';

import Layout from '@layout/PagesLayout';
import BackgroundImage from '@image/64-anos-de-historia.jpeg';

const School: FC = () => {
	return (
		<Layout title='Home Page' backgroundColor='#fff'>
			<div className='w-full flex flex-col items-center justify-center'>
				<h1 className='mt-10 font-bold text-2xl mb-5'>G.R.E.S Acadêmicos de Santa Cruz</h1>
				<img className='w-[74%] pb-10' src={BackgroundImage} alt='' />

				<p className='w-[74%] mb-3 text-lg'>
					Grêmio Recreativo Escola de Samba Acadêmicos de Santa Cruz (ou simplesmente Santa Cruz) é uma escola de samba brasileira da cidade do Rio de Janeiro, com sede no bairro
					de Santa Cruz, na zona oeste da cidade. Dentre as escolas de samba do carnaval carioca que já desfilaram na Marquês de Sapucaí, é a que se situa mais distante do
					sambódromo, localizada na Rua do Império em Santa Cruz. Atualmente é filiada a Super Liga Carnavalesca do Brasil e participa da Série Prata, a terceira divisão do
					Carnaval Carioca.
				</p>
				<p className='w-[74%] mb-3 text-lg'>
					Desde a sua estreia no carnaval carioca sempre foi tida como a escola de samba representante da zona rural do Rio, fato este que, por vezes implicava em preconceito por
					parte da mídia e de sambistas de outras escolas. Já no seu quarto ano de desfiles no Rio de Janeiro figurava entre as grandes do carnaval carioca. Fato este que se
					repetiria por mais oito vezes. A Acadêmicos de Santa Cruz porém, nunca permaneceu neste grupo.
				</p>
				<p className='w-[74%] mb-3 text-lg'>
					A Santa Cruz sempre esteve atrelada as manifestações culturais do seu bairro e ligada aos projetos sociais. Estes já beneficiaram crianças e jovens, adultos e idosos ao
					longo dos anos. Acordos com a iniciativa privada, principalmente empresários e comerciantes locais sempre foram fundamentais para a realização dos seus desfiles e a
					manutenção destes projetos.
				</p>

				<div className='w-[74%] bg-green-800 rounded-md p-5 flex flex-col items-center justify-center mt-5'>
					<h2 className='text-white font-bold text-2xl mb-6 mt-5'>18/02/1959 - Fundação</h2>

					<p className='w-[74%] mb-3 text-lg text-white'>
						Foi de um bloco de sujo, o Vai Quem Quer, nos anos 1950, que começou a desenhar-se a futura escola de samba Acadêmicos de Santa Cruz, cujas reuniões iniciais aconteciam
						no pontilhão da Rua do Império, esquina com a Rua Campeiro-Mór.
					</p>

					<p className='w-[74%] mb-3 text-lg text-white'>
						A escola surgiu de uma dissidência de um grupo de foliões que desfilavam no bloco carnavalesco Garotos do Itá e, mais tarde, em 18 de fevereiro de 1959, fundava-se a
						nova escola que, nos anos de 1967 e 1968, começou a aglutinar sambistas de outras escolas de samba de Santa Cruz, como, Unidos da Jaqueira, Independentes do Morro do
						Chá, Garotos do Itá e Unidos do Caxias.
					</p>

					<p className='w-[74%] mb-3 text-lg text-white'>
						O Acadêmicos de Santa Cruz foi fundado por José Ramos Cordeiro (Zé Taqueiro), Altamiro de Oliveira, Guilherme José de Andrade, Luiz dos Santos Oliveira (Hominho),
						Benedito Antônio do Nascimento (Coragem), Hélio de Carvalho (Petico), Ubirajara das Neves (Bira), Áureo Cordeiro Ramos (Mestre Áureo), José Vieira Félix (Dindica),
						Otacílio de Souza, Manoel José de Santana (Biéca), Otávio Dantas (Tavinho) e Luiz Cordeiro Ramos.
					</p>

					<p className='w-[74%] mb-3 text-lg text-white'>
						Tem as cores verde e branco. Teve como símbolo inicial a figura de um boi como referência ao matadouro que durante anos funcionou no bairro, um capelo fazia referência
						aos acadêmicos que fundaram a escola, juntamente a um pandeiro e um surdo como marcos da relação com o carnaval. Mais tarde o símbolo da escola foi substituído pela
						figura de uma coroa, sendo que em alguns anos a escola teve na bandeira uma estrela.
					</p>
				</div>

				<h3 className='font-bold text-2xl mt-12'>História</h3>

				<p className='w-[74%] mb-5 text-lg mt-4'>
					<strong>Anos 1960 -</strong>
					Afilhada da Unidos de Bangu e madrinha da Unidos do Uraiti e da Acadêmicos de Itaguaí, a Acadêmicos de Santa Cruz desfilou em 1960, 1961 e 1962 na própria localidade de
					Santa Cruz, zona oeste da cidade do Rio de Janeiro. Ainda em 1962, filiou-se à Confederação da Escolas de Samba e desfilou pela primeira vez no centro da cidade no dia 2
					de dezembro, por ocasião do 1° Congresso do Samba. Em 1963, disputou o carnaval na Praça Onze (Grupo de Acesso B) e foi campeã. Em 1965, a Acadêmicos de Santa Cruz foi
					campeã do Grupo de Acesso A, por ocasião do carnaval do IV Centenário e já estava entre as grandes escolas do carnaval carioca no ano seguinte.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 1970 -</strong>A década de 1970 foi marcada por homenagens a grandes músicos da cultura brasileira como a cantora Dalva de Oliveira em 1974, o poeta Catulo
					da Paixão Cearense em 1977 e o compositor Carlos Gomes em 1978. Viveu períodos instáveis oscilando entre o segundo e terceiro grupo, com momentos de auge e também de
					grandes dificuldades. A agremiação conquistou um campeonato pelo grupo 3 em 1973.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 1980 -</strong>Em 1984, o ano de estreia do Sambódromo do Rio de Janeiro, a escola chegou em segundo lugar no Grupo de Acesso A com o enredo afro "Acima da
					coroa de um rei, só deus". Este resultado garantiu sua presença no supercampeonato, disputado no sábado seguinte ao carnaval. Porém neste desfile, que reunia as seis
					primeiras colocadas do grupo Especial mais a campeã e a vice do grupo de Acesso A, a Santa Cruz chegou apenas em oitavo lugar. O enredo abordava os santos e divindades
					das religiões africanas.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					O desfile de 1985, foi marcado por um grande atraso causado por um acidente na concentração, envolvendo um dos principais carros da escola e uma grande alegoria da
					Beija-Flor. Seu desfile, orçado em 800 milhões de cruzeiros, cifra alcançada graças ao patrocínio do champanha Moët et Chandon e do Grupo Monteiro Aranha contou com a
					presença de muitos colunáveis, inclusive Martha Rocha, que desfilou entre os 2500 componentes. A escola se apresentou com duas alas de baianas e levou para a Sapucaí sob
					o comando de Mestre Áureo uma das melhores bateria. Aroldo Melodia era o intérprete do samba.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 1986, a Santa Cruz fez um tributo aos estados brasileiros com o enredo E você o que é que dá? do carnavalesco José Lima Galvão, explorando suas riquezas, folclore,
					costumes, misticismo… mostrando a contribuição de cada estado para a grandeza do Brasil. Os anos seguintes foram marcados pelo bom humor e a crítica marcante do
					carnavalesco Luiz Fernando Reis com o enredo "Quem espera só se cansa" e o enredo "Como se bebe nesta terra…!"; este último enfocando as bebidas no Brasil.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 1990 -</strong>Em 1990 a escola teve seu samba-enredo de maior repercussão: "Os Heróis da Resistência". Em grande parte devido ao intérprete Carlinhos de
					Pilares. Mais tarde o samba foi gravado na voz de Emílio Santiago. Com um desfile grandioso em homenagem aos criadores do jornal O Pasquim, importante na luta contra a
					ditadura militar, os Acadêmicos de Santa Cruz não conseguiram se manter no Grupo Especial. O desfile contou com a presença de Adolfo Pérez Esquivel, prêmio Nobel da Paz.
					No ano de 1991, a escola era favorita mas desfilou às escuras, por conta de um blecaute na Marquês de Sapucaí, onde se apresentava com o enredo "O Boca do Inferno", sobre
					o poeta baiano Gregório de Mattos e Guerra. O blecaute durou noventa minutos. A escola não foi julgada. Posteriormente ganhou na Justiça o direito de desfilar entre as
					grandes no carnaval de 1992.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					No ano de 1992, o Superior Tribunal de Justiça (STJ), em inédita decisão obrigou a Liesa a deixar que a Acadêmicos de Santa Cruz abrisse o desfile do Grupo Especial.
					Porém a decisão veio semanas antes do carnaval. O enredo "De quatro em quatro, eu chego lá", dos carnavalescos Albeci Pereira e Ney Ayan, morto em 1991, tentou mostrar a
					mística do algarismo 4 e sua relação com o homem desde a pré-história. O despreparo da escola para desfilar no grupo de elite era evidente. Com um desfile marcado por
					atrasos, correria e quebras de carros o rebaixamento era dado como certo na quarta-feira de cinzas.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 1993 a Acadêmicos de Santa Cruz conseguiu desenvolver uma mensagem política com propriedade. Financiada pelo Sindicato dos Petroleiros (Sindipetro) e do fundo de
					pensão da estatal, o Petros, a escola conseguiu defender o monopólio estatal do petróleo com um bom samba. A escola, entretanto, não apresentou o carro abre-alas, fazendo
					com que o início de seu desfile não causasse tanto impacto. Entre os destaques, o ex-deputado Euzébio Rocha, autor do projeto que instituiu o monopólio da Petrobras em
					1953, e Jair Amorim, um dos membros mais antigos do Partido Comunista Brasileiro (PCB) e um dos líderes da campanha "O petróleo é nosso".
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					No ano seguinte, o enredo abordava as grandes rotas comerciais pelos cinco cantos do mundo. Os comércios da Pérsia, China e Índia foram retratados em carros alegóricos.
					Para o carnaval de 1995, a Santa Cruz desenvolveu um enredo afro, "Deuses e costumes nas terras de Santa Cruz" que enfocava a música, a dança, a culinária e religiões da
					cultura africana. O samba foi puxado pela cantora Leci Brandão. No carnaval de 1996, com notas máximas em todos os quesitos a Santa Cruz levou o título do grupo de acesso
					A. O enredo "Ribalta, sonho, luz e ilusão" agradou os jurados, e enfim veio a vitória. Assim, a escola teve mais uma tentativa de permanecer na elite do carnaval em 1997.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Com "Não Se Vive Sem Bandeira", do carnavalesco Albeci Pereira, a Santa Cruz iniciou a segunda noite de desfiles disposta a se safar das quatro últimas posições que
					determinavam o rebaixamento. O desfile ficou marcado pela nudez das musas da vinheta de carnaval da Rede Manchete. A sumária fantasia das três madrinhas da bateria, Kelly
					Cristina, Juli Alves e Marcela Milk teve de ser encoberta por três camisetas da escola, que foram amarradas na cintura das moças, então, liberadas para desfilar. No ano
					seguinte, o desfile, aguardado com polêmica, se revelou uma bela homenagem ao cantor e compositor do rock nacional Cazuza.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Os desfiles de 1999 e 2000 a escola não obteve a pontuação necessária ao acesso à elite do carnaval carioca. Em 1999, o enredo homenageava o empresário e comunicador
					Abraham Medina que criou na televisão brasileira o programa Noite de gala - e que fez da rede de eletrodomésticos Rei da Voz um verdadeiro império. Apesar do bom samba,
					plasticamente a escola desfilou pobre e pouco criativa para contar o enredo. Já no carnaval do ano 2000, a Santa Cruz exaltou a reciclagem do lixo. As fantasias leves
					facilitavam a evolução do componente. Na apuração, notas baixas nos quesitos enredo e alegorias garantiram apenas a sexta colocação.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 2000 -</strong>Em 2001, o desfile foi em homenagem ao ator, compositor e escritor Mário Lago. O artista porém fora proibido pelos médicos de desfilar. O
					destaque do desfile foram as alas que representavam máquinas de escrever, tesouras (a censura), o Bola Preta, a televisão e o Fluminense, seu time de coração. Por pouco a
					escola não conseguiu o acesso ao Grupo Especial.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 2002, finalmente a escola conseguiu o sonhado retorno ao grupo principal das escolas de samba. Foi a campeã do grupo A com um enredo sobre a história e origem do
					papel, superando escolas tradicionais como Vila Isabel, Estácio e União da Ilha.[11] Mas a apuração das notas na quarta-feira de cinzas gerou acusações de manipulação de
					resultados por parte da Unidos de Vila Isabel. A Vila Isabel alegou na Justiça que uma das notas que recebera de uma jurada do desfile tinha sido trocada. Uma liminar
					favorável à azul-e-branco fez com que ela fosse aclamada campeã do Grupo de Acesso. O suposto erro deu o título de campeã à escola Acadêmicos de Santa Cruz, com um décimo
					de vantagem sobre a Vila Isabel, segunda colocada.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					A Santa Cruz em 2003 desfilou com pouco dinheiro, mas mesmo assim, segundo a crítica, fez um ótimo desfile contando a história do teatro pelo mundo com o enredo "Do
					Universo teatral à Ribalta do Carnaval". Na quarta-feira de cinzas a escola foi rebaixada com apenas uma nota dez dos jurados.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					De volta ao Grupo de Acesso, a escola ficou com o vice-campeonato em 2004, com um enredo sobre o bairro de Santa Cruz e toda sua importância histórica para o Brasil. Na
					concentração, minutos antes do desfile veio a falecer de infarto um dos diretores de bateria. A perda do título veio de um erro da comissão de frente.[14] O intérprete
					Luizinho Andanças tem o seu talento notadamente reconhecido e é contratado pela Porto da Pedra após o carnaval.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 2005 com alegorias grandes, embora sem criatividade, a Santa Cruz contou as conquistas e glórias da cidade do Rio de Janeiro. Com um desfile tecnicamente correto foi
					apontada entre as possíveis campeãs. No entanto, faltou samba e emoção. Rocinha, União da Ilha e São Clemente foram melhores e a Santa Cruz ficou com o quarto lugar. O
					samba foi resultado de uma junção entre duas obras empatadas na decisão.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 2006, o enredo sobre a França surgiu em retribuição ao evento cultural Ano do Brasil na França. O patrocínio veio de um grupo de empresários franceses que frequentaram
					a quadra em inúmeras ocasiões. A escola levou componentes para se apresentar durante o evento na França. A homenagem a França proporcionou um desfile bem tradicional para
					a Santa Cruz porém não passou todo o luxo e glamour que o enredo pedia. A escola terminou a apuração na sexta posição.
				</p>

				<p className='w-[74%] mb-5 text-lg'>
					A proposta para 2007 era de uma mudança de estilo. Desvencilhar-se dos enredos históricos que sempre foi a marca da escola. Para isso se deu a contratação de um dos
					integrantes da vitoriosa comissão de carnaval da Beija-Flor, Fran-Sérgio, para ajudar a compor o enredo sobre o "tempo", já visto algumas vezes na avenida. Também foi
					contratado uma "voz de peso" para o microfone da escola: David do Pandeiro. Para 2008 a Santa Cruz aceita a proposta da prefeitura de elaborar um enredo temático dos 200
					anos da chegada da Família Real Portuguesa ao Brasil, embora já tivesse firmado acordo com a prefeitura de Itaguaí. O enredo, então, conseguiu unir a abertura dos portos,
					momento da chegada dos portugueses, com a cidade de Itaguaí, que abriga um dos maiores portos da América Latina: o porto de Itaguaí. O samba escolhido foi resultante de
					uma fusão entre duas parcerias.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					O ano de 2009, ano do jubileu de ouro da escola, foi marcado por perdas dentro da agremiação, como a da primeira dama e carnavalesca Rosele Nicolau, dias depois do
					carnaval.[17] O desfile do ano seguinte acabaria lhe prestando uma homenagem.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 2010 -</strong>No carnaval de 2011, a proposta de enredo era voltar no tempo para mostrar as transformações culturais, científicas e políticas dos anos
					60.[18] Em 2012 a Santa Cruz homenageou em seu enredo o radialista Antônio Carlos e seu programa nas manhãs do rádio do Brasil.[19] No carnaval de 2013, a Santa Cruz
					contou com Paulinho Mocidade como puxador de samba, e o retorno de Sylvio Cunha. O enredo contou as lendas do Ceará, como a do Dragão do mar e Iracema.[20] O enredo
					escolhido para 2014 teve como referência Jundiaí e a qualidade de vida da cidade do interior paulista com uma proposta de intercâmbio entre o carnaval das duas
					cidades.[21] Em 2015 levou para a avenida um enredo irreverente em homenagem ao centenário de Grande Otelo.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Para 2016 a grande novidade foi a estreia de Gabby Moura, ex-participante da segunda edição do The Voice Brasil no microfone principal do carro de som juntamente com o
					intérprete Pavarotti.[23] Mais uma vez apostando na temática ambiental terminou em décimo segundo lugar, mesma colocação de 2017, quando abordou a literatura infantil em
					seu desfile. Para o carnaval de 2018, a escola aposta no experiente carnavalesco Max Lopes.[24] Para assumir o carro de som, o experiente intérprete Quinho, que fez seu
					retorno ao carnaval carioca após quatro anos de ausência, e o estreante Roninho, com passagem pelo carro de som da Mocidade Independente. Com o enredo "No voo mágico da
					esperança, quem acredita sempre alcança" a escola fez um desfile problemático nos quesitos plásticos e de evolução, terminando na décima colocação.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					A preparação para o carnaval de 2019 foi bastante conturbada. A escola teve o barracão lacrado por representantes de uma empresa privada, que comprou o terreno que a
					escola ocupava e teve menos de dois meses para preparar o desfile com a liberação de uso do espaço.[25] O enredo foi uma justa homenagem a atriz Ruth de Souza através do
					enredo "Ruth de Souza - Senhora liberdade. Abre as asas sobre nós", desenvolvido pelo carnavalesco Cahê Rodrigues, que retornou a Santa Cruz após 16 anos.[26] O samba
					encomendado, foi considerado um dos melhores do Carnaval. A escola obteve a 5ª colocação ao fim da apuração.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Para 2020, a escola renovou com o carnavalesco Cahê Rodrigues para desenvolver um enredo sobre o município de Barbalha no interior do Ceará através do enredo "Santa Cruz
					de Barbalha - Um conto popular no Cariri Cearense".[27] O samba foi encomendado aos compositores Elson Ramires, Samir Trindade e Junior Fionda e foi premiado com o
					Estandarte de Ouro.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					<strong>Anos 2020 -</strong>Devido a pandemia de covid-19, não houve desfiles no ano de 2021. O enredo programado para o carnaval 2021 foi transferido para o ano
					seguinte: uma homenagem ao ator Milton Gonçalves[29], de autoria do carnavalesco Cid Carvalho.[30] O samba foi, mais uma vez, encomendado pelos compositores vencedores do
					prêmio Estandarte de Ouro de melhor samba, no último carnaval.[31] Por decisão de autoridades municipais e sanitárias foi decidido que os desfiles do Carnaval 2022 deviam
					ser realizados no feriado prolongado de 21 de abril em decorrência da pandemia do coronavírus.[32] O desfile em si não contou com a presença do homenageado. O ator, por
					motivos de saúde, não pode desfilar. O enredo contou passagens da vida de Milton desde a infância em Monte Santo, Minas Gerais, passando pela início de carreira na cidade
					de São Paulo, e seu pioneirismo no meio artístico para a negritude, representada por amigos e artistas. Na apuração, o julgamento dos quesitos revelou-se incoerente e
					bastante tendencioso. O rebaixamento da agremiação juntamente com a Acadêmicos do Cubango foi considerado injusto por parte de escolas de samba co-irmãs e da mídia
					carnavalesca causando a revolta do público em geral.
				</p>

				<p className='w-[74%] mb-10 text-lg'>
					Em 2023, a Santa Cruz desfilou pela primeira vez na Intendente Magalhães, disputando a Série Prata, com o enredo "Santa é minha cruz. É luz da preservação. Meu canto é
					flecha certeira, para findar o pranto da devastação", que abordava a preservação da natureza. Apesar de ser apontada como uma das favoritas ao acesso, a escola terminou
					na quinta colocação do desfile de sexta-feira. Após o carnaval, Moisés Antônio Coutinho, o Zezo, deixou oficialmente a presidência da Santa Cruz após 25 anos no cargo.
					Uma nova diretoria foi eleita em maio do mesmo ano, tendo Bianca Canedo como nova presidente, Leonardo de Souza Siqueira "Nego Léo" como vice-presidente e Venilton
					Stabile Segundo como presidente de honra.[34] Com a posse da nova diretoria, a Santa Cruz iniciou sua preparação para o carnaval 2024, reformulando sua equipe contratando
					o intérprete Luizinho Andanças, que retorna à escola após 20 anos, para fazer dupla com Roninho.
				</p>
			</div>
		</Layout>
	);
};

export default School;
