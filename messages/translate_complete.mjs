import fs from 'fs';

const PT_PATH = 'C:/DIBS SOLUTIONS/jobs/site-institucional-dibs-solutions/frontend/messages/pt.json';
const ES_PATH = 'C:/DIBS SOLUTIONS/jobs/site-institucional-dibs-solutions/frontend/messages/es.json';

const pt = JSON.parse(fs.readFileSync(PT_PATH, 'utf8'));
const es = JSON.parse(fs.readFileSync(ES_PATH, 'utf8'));

const dict = new Map();

// Helper
function add(pts, ess) { dict.set(pts, ess); }

// ======== HERO ========
add('Design, desenvolvimento, conteúdo, blockchain e segurança reunidos em um só lugar. Metodologia ágil, entregas quinzenais e 100% dos projetos concluídos dentro do prazo estipulado.', 'Diseño, desarrollo, contenido, blockchain y seguridad reunidos en un solo lugar. Metodología ágil, entregas quincenales y 100% de los proyectos concluidos dentro del plazo estipulado.');
add('Conhecer serviços', 'Conocer servicios');
add('Nota média dos clientes', 'Nota media de los clientes');

// ======== HOME ========
add('Nossos Serviços', 'Nuestros Servicios');
add('Soluções completas em', 'Soluciones completas en');
add('um só lugar', 'un solo lugar');
add('E-Book — Experiência do Lar', 'E-Book — Experiencia del Hogar');
add('E-book completo do zero: pesquisa, escrita, design editorial, diagramação e publicação na Amazon KDP. Projeto entregue em 15 dias.', 'E-book completo desde cero: investigación, escritura, diseño editorial, diagramación y publicación en Amazon KDP. Proyecto entregado en 15 días.');
add('Design System exclusivo, prototipação no Figma, desenvolvimento frontend com Next.js e Tailwind. Identidade visual que comunica artesanato e acolhimento.', 'Design System exclusivo, prototipado en Figma, desarrollo frontend con Next.js y Tailwind. Identidad visual que comunica artesanía y calidez.');
add('Jogo interativo com 5 fases, power-ups, sistema de vidas e ranking. Mecânicas de bônus e progressão com experiência mobile-first.', 'Juego interactivo con 5 fases, power-ups, sistema de vidas y ranking. Mecánicas de bonificación y progresión con experiencia mobile-first.');
add('Plataforma interna de gestão de tempo com rastreamento por projeto, cálculos de custo, simulação de orçamentos e inteligência de precificação.', 'Plataforma interna de gestión de tiempo con seguimiento por proyecto, cálculos de costo, simulación de presupuestos e inteligencia de fijación de precios.');
add('Portfólio', 'Portafolio');
add('Vamos construir algo incrível juntos?', '¿Construimos algo increíble juntos?');
add('Conte-nos sobre seu projeto. Em até 24h você recebe uma análise preliminar gratuita com nossas recomendações.', 'Cuéntenos sobre su proyecto. En hasta 24h recibe un análisis preliminar gratuito con nuestras recomendaciones.');
add('Solicitar análise gratuita →', 'Solicitar análisis gratuito →');

// ======== CASES ========
add('E-book completo do zero: pesquisa de mercado, escrita criativa, design editorial, diagramação profissional e publicação na Amazon KDP. Projeto entregue em 15 dias com vendas já na primeira semana.', 'E-book completo desde cero: investigación de mercado, escritura creativa, diseño editorial, diagramación profesional y publicación en Amazon KDP. Proyecto entregado en 15 días con ventas ya en la primera semana.');
add('Design System exclusivo com prototipação no Figma, desenvolvimento frontend com Next.js e Tailwind, e identidade visual que comunica artesanato e acolhimento.', 'Design System exclusivo con prototipado en Figma, desarrollo frontend con Next.js y Tailwind, e identidad visual que comunica artesanía y calidez.');
add('Jogo interativo com 5 fases temáticas (Floresta, Deserto, Espaço, Cidade, Castelo), power-ups especiais, sistema de 3 vidas e ranking de pontuação. Experiência mobile-first com mecânicas progressivas.', 'Juego interactivo con 5 fases temáticas (Bosque, Desierto, Espacio, Ciudad, Castillo), power-ups especiales, sistema de 3 vidas y ranking de puntuación. Experiencia mobile-first con mecánicas progresivas.');
add('Plataforma interna de gestão de tempo com rastreamento por projeto e etapa, cálculo automático de custos, simulação de orçamentos e inteligência de precificação baseada em histórico.', 'Plataforma interna de gestión de tiempo con seguimiento por proyecto y etapa, cálculo automático de costos, simulación de presupuestos e inteligencia de fijación de precios basada en historial.');
add('Sistema completo de gestão de investimentos com perfis multi-nível (investidor, idealizador, administrador), tokenização de projetos, contrato inteligente e dashboard financeiro.', 'Sistema completo de gestión de inversiones con perfiles multinivel (inversor, idealizador, administrador), tokenización de proyectos, contrato inteligente y dashboard financiero.');

// ======== SOBRE ========
add('Sobre Nós', 'Sobre Nosotros');
add('Uma agência de tecnologia onde humanos e IA trabalham em orquestração para entregar resultados extraordinários.', 'Una agencia de tecnología donde humanos e IA trabajan en orquestación para entregar resultados extraordinarios.');
add('A Dibs Solutions opera no modelo hub-and-spoke: um orquestrador central (Einstein) coordena agentes especialistas espalhados por 8 departamentos. Cada demanda é roteada para o agente certo, no momento certo, com a supervisão humana certa.', 'Dibs Solutions opera en el modelo hub-and-spoke: un orquestrador central (Einstein) coordina agentes especialistas distribuidos en 8 departamentos. Cada demanda es enrutada al agente correcto, en el momento correcto, con la supervisión humana correcta.');
add('Isso significa que você não contrata um profissional — você contrata uma equipe completa: arquiteto, desenvolvedores, designers, revisores, testers e DevOps, todos trabalhando em sincronia.', 'Eso significa que no contrata a un profesional — contrata un equipo completo: arquitecto, desarrolladores, diseñadores, revisores, testers y DevOps, todos trabajando en sincronía.');
add('Nossa História', 'Nuestra Historia');
add('Fundação', 'Fundación');
add('Rafael Mendonça funda a Dibs Solutions com a visão de criar uma agência de tecnologia onde agentes de IA especializados trabalham em orquestração com humanos. O modelo hub-and-spoke nasce aqui.', 'Rafael Mendonça funda Dibs Solutions con la visión de crear una agencia de tecnología donde agentes de IA especializados trabajan en orquestación con humanos. El modelo hub-and-spoke nace aquí.');
add('A agência entrega seus primeiros projetos: plataformas web, conteúdo editorial e consultoria técnica. O modelo de agentes IA prova sua eficácia na prática.', 'La agencia entrega sus primeros proyectos: plataformas web, contenido editorial y consultoría técnica. El modelo de agentes IA prueba su eficacia en la práctica.');
add('Expansão', 'Expansión');
add('Crescimento para 8 departamentos especializados. Blockchain, Automações Financeiras e o Radar Dibs são lançados. A equipe chega a 40+ agentes.', 'Crecimiento a 8 departamentos especializados. Blockchain, Automatizaciones Financieras y el Radar Dibs son lanzados. El equipo llega a 40+ agentes.');
add('Consolidação', 'Consolidación');
add('Dibs Solutions se consolida como referência em desenvolvimento de software, design, conteúdo e blockchain. Mais de 40 projetos entregues com 100% de conclusão.', 'Dibs Solutions se consolida como referente en desarrollo de software, diseño, contenido y blockchain. Más de 40 proyectos entregados con 100% de conclusión.');
add('Não somos prestadores de serviço — somos parceiros. Cada projeto é tratado como se fosse nosso.', 'No somos proveedores de servicio — somos socios. Cada proyecto es tratado como si fuera nuestro.');
add('Inteligência Coletiva', 'Inteligencia Colectiva');
add('Combinamos o melhor da inteligência humana com IA especializada para entregar resultados que nenhum dos dois alcançaria sozinho.', 'Combinamos lo mejor de la inteligencia humana con IA especializada para entregar resultados que ninguno de los dos alcanzaría por sí solo.');
add('Transparência Total', 'Transparencia Total');
add('Processos abertos, comunicação clara e entregas previsíveis. Sem caixa-preta, sem surpresas.', 'Procesos abiertos, comunicación clara y entregas predecibles. Sin caja negra, sin sorpresas.');
add('Excelência Mensurável', 'Excelencia Medible');
add('99.5% de uptime, 4.9 de satisfação, 100% de projetos concluídos. Nossos números falam por si.', '99.5% de uptime, 4.9 de satisfacción, 100% de proyectos concluidos. Nuestros números hablan por sí solos.');
add('Nota de satisfação dos clientes', 'Nota de satisfacción de los clientes');
add('Conheça os profissionais que tornam tudo isso possível.', 'Conozca a los profesionales que hacen todo esto posible.');
add('Conheça nossa equipe →', 'Conozca nuestro equipo →');

// ======== SERVICOS ========
add('Soluções completas para seu negócio digital', 'Soluciones completas para su negocio digital');
add('8 áreas de atuação com líderes especializados e squads dedicadas. Clique em cada serviço para detalhes completos.', '8 áreas de actuación con líderes especializados y squads dedicadas. Haga clic en cada servicio para detalles completos.');
add('Sistemas web, APIs REST/GraphQL, SaaS multi-tenant. Arquitetura escalável com Next.js, React, Node.js, Python, Go, Java, .NET e PHP Laravel. Squads ágeis montados sob demanda com entregas quinzenais.', 'Sistemas web, APIs REST/GraphQL, SaaS multi-tenant. Arquitectura escalable con Next.js, React, Node.js, Python, Go, Java, .NET y PHP Laravel. Squads ágiles montados bajo demanda con entregas quincenales.');
add('Design System completo com Storybook, prototipação navegável no Figma, UX Writing estratégico com microcopy orientado a conversão, e validação de acessibilidade WCAG AA desde o wireframe.', 'Design System completo con Storybook, prototipado navegable en Figma, UX Writing estratégico con microcopy orientado a conversión, y validación de accesibilidad WCAG AA desde el wireframe.');
add('Conteúdo & Publicação', 'Contenido & Publicación');
add('E-books institucionais, blogs técnicos, copywriting de vendas, ghostwriting, tradução e localização (PT/EN/FR/ES), e publicação completa na Amazon KDP com otimização SEO.', 'E-books institucionales, blogs técnicos, copywriting de ventas, ghostwriting, traducción y localización (PT/EN/FR/ES), y publicación completa en Amazon KDP con optimización SEO.');
add('Smart contracts em Solidity e Rust, protocolos DeFi, tokenização de ativos reais (RWA), DAOs com governança descentralizada, e auditoria de segurança on-chain completa.', 'Smart contracts en Solidity y Rust, protocolos DeFi, tokenización de activos reales (RWA), DAOs con gobernanza descentralizada, y auditoría de seguridad on-chain completa.');
add('Automações Financeiras', 'Automatizaciones Financieras');
add('Bots de trading automatizados para cripto e B3, dashboards de compliance em tempo real, análise de risco algorítmica e integração com sistemas legados do mercado financeiro.', 'Bots de trading automatizados para cripto y B3, dashboards de compliance en tiempo real, análisis de riesgo algorítmico e integración con sistemas heredados del mercado financiero.');
add('Validação de projetos em 4 fases: UX (jornada do usuário), Técnica (arquitetura), Mercado (viabilidade) e Econômica (ROI). Score 0-10 com recomendação Go/No-Go e relatório executivo.', 'Validación de proyectos en 4 fases: UX (jornada del usuario), Técnica (arquitectura), Mercado (viabilidad) y Económica (ROI). Score 0-10 con recomendación Go/No-Go e informe ejecutivo.');
add('Auditoria & Segurança', 'Auditoría & Seguridad');
add('ARSA (Análise Rápida de Superfície de Ataque), code review orientado a segurança, testes de penetração, conformidade LGPD/GDPR, e política de segurança da informação.', 'ARSA (Análisis Rápido de Superficie de Ataque), code review orientado a seguridad, pruebas de penetración, conformidad LGPD/GDPR, y política de seguridad de la información.');
add('Gestão de escopo e mudanças, revisão de arquitetura de sistemas, roadmaps estratégicos, definição de metodologias, e memória organizacional para continuidade de projetos.', 'Gestión de alcance y cambios, revisión de arquitectura de sistemas, roadmaps estratégicos, definición de metodologías, y memoria organizacional para continuidad de proyectos.');

// ======== SERVICES CAROUSEL ========
add('Construção de software que escala', 'Construcción de software que escala');
add('Design System, Storybook, prototipação, UX Writing e acessibilidade WCAG AA.', 'Design System, Storybook, prototipado, UX Writing y accesibilidad WCAG AA.');
add('E-books, blogs, copywriting, tradução e publicação na Amazon KDP.', 'E-books, blogs, copywriting, traducción y publicación en Amazon KDP.');
add('Soluções descentralizadas', 'Soluciones descentralizadas');
add('Bots de trading, integração B3, compliance e risco em tempo real.', 'Bots de trading, integración B3, compliance y riesgo en tiempo real.');
add('Automatize operações financeiras', 'Automatice operaciones financieras');
add('Metodologia 4 fases: UX, Técnica, Mercado e Econômica. Score Go/No-Go.', 'Metodología 4 fases: UX, Técnica, Mercado y Económica. Score Go/No-Go.');
add('ARSA, pentest, LGPD compliance e revisão de código.', 'ARSA, pentest, compliance LGPD y revisión de código.');
add('Escopo, arquitetura, roadmaps e memória organizacional.', 'Alcance, arquitectura, roadmaps y memoria organizacional.');

// ======== SOFTWARE DEVELOPMENT ========
add('Arquitetamos e desenvolvemos sistemas web, APIs e SaaS sob medida. Squads multidisciplinares montadas para cada projeto, do conceito ao deploy contínuo.', 'Arquitectamos y desarrollamos sistemas web, APIs y SaaS a medida. Squads multidisciplinarias montadas para cada proyecto, del concepto al deploy continuo.');
add('Performance que não escala', 'Rendimiento que no escala');
add('Sistemas que travam conforme o crescimento de usuários e dados. Reescrita cara e arriscada.', 'Sistemas que se traban conforme el crecimiento de usuarios y datos. Reescritura cara y arriesgada.');
add('Código legado difícil de manter', 'Código heredado difícil de mantener');
add('Dependências desatualizadas, dívida técnica acumulada, dificuldade para contratar quem mexa no código.', 'Dependencias desactualizadas, deuda técnica acumulada, dificultad para contratar quien toque el código.');
add('Infraestrutura mal dimensionada, retrabalho constante e ausência de automação nos processos.', 'Infraestructura mal dimensionada, retrabajo constante y ausencia de automatización en los procesos.');
add('Sprints longos, deploy manual e processos burocráticos que atrasam o lançamento de funcionalidades.', 'Sprints largos, deploy manual y procesos burocráticos que retrasan el lanzamiento de funcionalidades.');
add('Mercado aquecido, salários altos e perfis raros. Montar e manter um time de tecnologia é caro e demorado.', 'Mercado caliente, salarios altos y perfiles escasos. Montar y mantener un equipo de tecnología es caro y lento.');
add('Entregamos software completo, do frontend à infraestrutura. Cada projeto conta com um arquiteto dedicado.', 'Entregamos software completo, del frontend a la infraestructura. Cada proyecto cuenta con un arquitecto dedicado.');
add('SPA, SSR, ISR. Next.js, React, Tailwind. Interfaces rápidas, responsivas e acessíveis.', 'SPA, SSR, ISR. Next.js, React, Tailwind. Interfaces rápidas, responsivas y accesibles.');
add('APIs REST e GraphQL. Node.js, Python, Go, Java, .NET, PHP. Escaláveis, seguras e bem documentadas.', 'APIs REST y GraphQL. Node.js, Python, Go, Java, .NET, PHP. Escalables, seguras y bien documentadas.');
add('React Native e Flutter. Android e iOS com uma base de código e atualizações simultâneas.', 'React Native y Flutter. Android e iOS con una base de código y actualizaciones simultáneas.');
add('APIs & Integrações', 'APIs & Integraciones');
add('Conectamos ERPs, gateways de pagamento, CRMs e serviços terceiros sem interromper operações.', 'Conectamos ERPs, gateways de pago, CRMs y servicios de terceros sin interrumpir operaciones.');
add('Modelagem relacional e NoSQL. Migrations, otimização de queries e replicação.', 'Modelado relacional y NoSQL. Migrations, optimización de queries y replicación.');
add('Entendemos o negócio, mapeamos fluxos e definimos requisitos técnicos junto com você.', 'Entendemos el negocio, mapeamos flujos y definimos requisitos técnicos junto con usted.');
add('Projetamos a estrutura do sistema, escolhemos a stack e definimos padrões de código.', 'Diseñamos la estructura del sistema, elegimos el stack y definimos estándares de código.');
add('Sprints quinzenais com entregas incrementais. Você acompanha o progresso em tempo real.', 'Sprints quincenales con entregas incrementales. Usted acompaña el progreso en tiempo real.');
add('Publicação com CI/CD, monitoramento ativo e suporte contínuo pós-lançamento.', 'Publicación con CI/CD, monitoreo activo y soporte continuo post-lanzamiento.');
add('Microsserviços', 'Microservicios');
add('Sistemas Distribuídos', 'Sistemas Distribuidos');
add('Conte-nos sua ideia. Em até 24h você recebe uma análise com recomendações técnicas e estimativa de prazo e custo.', 'Cuéntenos su idea. En hasta 24h recibe un análisis con recomendaciones técnicas y estimación de plazo y costo.');
add('Solicitar orçamento →', 'Solicitar presupuesto →');

// ======== BLOCKCHAIN ========
add('Soluções descentralizadas do conceito ao deploy — com segurança, auditoria e governança. Mais de 10 especialistas dedicados.', 'Soluciones descentralizadas del concepto al deploy — con seguridad, auditoría y gobernanza. Más de 10 especialistas dedicados.');
add('Falta de confiança digital', 'Falta de confianza digital');
add('Processos centralizados que dependem de intermediários. Seu negócio vulnerável a falhas e fraudes.', 'Procesos centralizados que dependen de intermediarios. Su negocio vulnerable a fallos y fraudes.');
add('Custos com intermediários', 'Costos con intermediarios');
add('Taxas altas em gateways, cartórios e terceiros de confiança. Blockchain elimina a maior parte desses custos.', 'Tarifas altas en gateways, notarías y terceros de confianza. Blockchain elimina la mayor parte de estos costos.');
add('Lentidão em liquidações', 'Lentitud en liquidaciones');
add('Transferências internacionais que levam dias. Smart contracts liquidam em segundos, 24/7.', 'Transferencias internacionales que toman días. Smart contracts liquidan en segundos, 24/7.');
add('Falta de transparência', 'Falta de transparencia');
add('Registros opacos e auditáveis apenas por poucos. Blockchain oferece rastreabilidade completa e imutável.', 'Registros opacos y auditables solo por pocos. Blockchain ofrece trazabilidad completa e inmutable.');
add('Dificuldade técnica', 'Dificultad técnica');
add('Contratar especialistas em Solidity, Rust, DeFi e auditoria é caro e escasso. Sua equipe pronta existe.', 'Contratar especialistas en Solidity, Rust, DeFi y auditoría es caro y escaso. Su equipo listo existe.');
add('Soluções descentralizadas completas, do smart contract à DApp. Tudo auditado e documentado.', 'Soluciones descentralizadas completas, del smart contract a la DApp. Todo auditado y documentado.');
add('Solidity (EVM) e Rust (Solana). Código auditado, otimizado para gas e com testes exaustivos.', 'Solidity (EVM) y Rust (Solana). Código auditado, optimizado para gas y con pruebas exhaustivas.');
add('Protocolos de empréstimo, staking, farming, DEXs e yield aggregators com segurança e eficiência.', 'Protocolos de préstamo, staking, farming, DEXs y yield aggregators con seguridad y eficiencia.');
add('Tokenização RWA', 'Tokenización RWA');
add('Transformamos ativos reais (imóveis, recebíveis, obras) em tokens negociáveis na blockchain.', 'Transformamos activos reales (inmuebles, cuentas por cobrar, obras) en tokens negociables en la blockchain.');
add('Governança descentralizada com votação on-chain, tesouraria multi-sig e propostas automatizadas.', 'Gobernanza descentralizada con votación on-chain, tesorería multi-sig y propuestas automatizadas.');
add('Coleções, marketplaces e utilidade além da arte. Tokens com valor real para seu negócio.', 'Colecciones, marketplaces y utilidad más allá del arte. Tokens con valor real para su negocio.');
add('Revisão completa de smart contracts: reentrância, overflow, access control e mais 20+ vetores.', 'Revisión completa de smart contracts: reentrancia, overflow, access control y más de 20 vectores.');
add('Entendemos o problema de negócio e definimos se blockchain é a melhor solução — nem sempre é.', 'Entendemos el problema de negocio y definimos si blockchain es la mejor solución — no siempre lo es.');
add('Escolha da chain, desenho dos contratos, definição de tokens e governance.', 'Elección de la chain, diseño de los contratos, definición de tokens y governance.');
add('Implementação dos smart contracts com testes unitários e integração contínua.', 'Implementación de los smart contracts con pruebas unitarias e integración continua.');
add('Segurança', 'Seguridad');
add('Orquestração', 'Orquestación');
add('Estratégia', 'Estrategia');
add('Falhas pós-auditoria', 'Fallos post-auditoría');
add('Conte-nos seu projeto Web3. Em até 48h devolvemos uma análise de viabilidade técnica com estimativa.', 'Cuéntenos su proyecto Web3. En hasta 48h devolvemos un análisis de viabilidad técnica con estimación.');
add('Solicitar análise →', 'Solicitar análisis →');

// ======== DESIGN UI/UX ========
add('Criamos experiências digitais completas, do wireframe ao pixel final, com foco em conversão, acessibilidade e consistência.', 'Creamos experiencias digitales completas, del wireframe al pixel final, con enfoque en conversión, accesibilidad y consistencia.');
add('Cores, fontes e componentes diferentes em cada tela. Experiência do usuário fragmentada e amadora.', 'Colores, fuentes y componentes diferentes en cada pantalla. Experiencia de usuario fragmentada y amateur.');
add('Baixa taxa de conversão', 'Baja tasa de conversión');
add('Interfaces confusas, CTAs mal posicionados e jornadas que não levam o usuário à ação desejada.', 'Interfaces confusas, CTAs mal posicionados y jornadas que no llevan al usuario a la acción deseada.');
add('Prototipação lenta', 'Prototipado lento');
add('Análise e desenvolvimento sem protótipos. Retrabalho constante porque o cliente só vê o resultado depois de pronto.', 'Análisis y desarrollo sin prototipos. Retrabajo constante porque el cliente solo ve el resultado después de terminado.');
add('Sites e apps que excluem milhões de usuários. Risco jurídico e perda de mercado por não atender WCAG.', 'Sitios y apps que excluyen a millones de usuarios. Riesgo jurídico y pérdida de mercado por no cumplir WCAG.');
add('Designers e desenvolvedores em silos. Componentes redesenhados toda vez, sem padrão nem documentação.', 'Diseñadores y desarrolladores en silos. Componentes rediseñados cada vez, sin estándar ni documentación.');
add('Design completo, do sistema de componentes à identidade visual. Tudo documentado e pronto para escala.', 'Diseño completo, del sistema de componentes a la identidad visual. Todo documentado y listo para escalar.');
add('Componentes reutilizáveis no Storybook com documentação viva, tokens de design e versão semântica.', 'Componentes reutilizables en Storybook con documentación viva, tokens de diseño y versión semántica.');
add('Prototipação', 'Prototipado');
add('Wireframes navegáveis no Figma para validar fluxos e jornadas antes de escrever uma linha de código.', 'Wireframes navegables en Figma para validar flujos y jornadas antes de escribir una línea de código.');
add('Microcopy estratégico, tom de voz documentado e textos que guiam o usuário em cada etapa da jornada.', 'Microcopy estratégico, tono de voz documentado y textos que guían al usuario en cada etapa de la jornada.');
add('WCAG AA desde o wireframe. Contraste 4.5:1, labels semânticas e navegação por teclado.', 'WCAG AA desde el wireframe. Contraste 4.5:1, labels semánticas y navegación por teclado.');
add('Implementação nativa com alternância suave entre temas. Consistência visual em qualquer preferência.', 'Implementación nativa con alternancia suave entre temas. Consistencia visual en cualquier preferencia.');
add('Paleta, tipografia, ícones e identidade completa. Sua marca traduzida para o digital com consistência.', 'Paleta, tipografía, íconos e identidad completa. Su marca traducida a lo digital con consistencia.');
add('Entendemos o negócio, o público-alvo e os objetivos de conversão. Alinhamos expectativas e prazos.', 'Entendemos el negocio, el público objetivo y los objetivos de conversión. Alineamos expectativas y plazos.');
add('Benchmarking, análise de concorrência e definição da arquitetura de informação.', 'Benchmarking, análisis de competencia y definición de la arquitectura de información.');
add('Wireframes de baixa fidelidade evoluindo para protótipos navegáveis. Validação a cada etapa.', 'Wireframes de baja fidelidad evolucionando a prototipos navegables. Validación en cada etapa.');
add('Pixel perfect no Figma. Entrega com guia de estilos, assets e especificações para desenvolvimento.', 'Pixel perfect en Figma. Entrega con guía de estilos, assets y especificaciones para desarrollo.');
add('Padrões', 'Estándares');
add('Revisão UI', 'Revisión UI');
add('Solicite uma análise gratuita da sua interface atual. Em até 48h devolvemos recomendações de melhoria.', 'Solicite un análisis gratuito de su interfaz actual. En hasta 48h devolvemos recomendaciones de mejora.');

// ======== CONTEUDO & PUBLICACAO ========
add('Publicação', 'Publicación');
add('Do planejamento editorial à publicação. Conteúdo que educa, engaja e vende — em português, inglês, francês e espanhol.', 'De la planificación editorial a la publicación. Contenido que educa, involucra y vende — en portugués, inglés, francés y español.');
add('Sem estratégia editorial', 'Sin estrategia editorial');
add('Conteúdo publicado sem planejamento, sem persona definida e sem calendário. Resultado: ninguém lê.', 'Contenido publicado sin planificación, sin persona definida y sin calendario. Resultado: nadie lo lee.');
add('Produção lenta e cara', 'Producción lenta y cara');
add('Contratar freelancers diferentes para cada etapa. Revisões infinitas e prazos estourados.', 'Contratar freelancers diferentes para cada etapa. Revisiones infinitas y plazos vencidos.');
add('Conteúdo que não vende', 'Contenido que no vende');
add('Textos genéricos que não educam, não engajam e não convertem. Investimento sem retorno.', 'Textos genéricos que no educan, no involucran y no convierten. Inversión sin retorno.');
add('Um profissional não domina pesquisa, escrita, revisão, design e publicação ao mesmo tempo.', 'Un profesional no domina investigación, escritura, revisión, diseño y publicación al mismo tiempo.');
add('Custos com tradução', 'Costos con traducción');
add('Traduções literais que perdem contexto cultural. Retrabalho para adaptar a cada mercado.', 'Traducciones literales que pierden contexto cultural. Retrabajo para adaptar a cada mercado.');
add('Conteúdo completo, da estratégia à publicação. Uma equipe editorial multidisciplinar para cada projeto.', 'Contenido completo, de la estrategia a la publicación. Un equipo editorial multidisciplinario para cada proyecto.');
add('Do briefing ao arquivo final. Pesquisa, narrativa, diagramação e格式 (PDF, ePub, Mobi).', 'Del briefing al archivo final. Investigación, narrativa, diagramación y formato (PDF, ePub, Mobi).');
add('Blog Técnico', 'Blog Técnico');
add('Conteúdo original com periodicidade definida. SEO, links internos, distribuição e métricas.', 'Contenido original con periodicidad definida. SEO, enlaces internos, distribución y métricas.');
add('Páginas de venda, landing pages, emails, CTAs e textos para redes sociais que convertem.', 'Páginas de venta, landing pages, emails, CTAs y textos para redes sociales que convierten.');
add('Tradução & Localização', 'Traducción & Localización');
add('PT/EN/FR/ES por tradutores especializados. Contexto cultural e técnico preservado.', 'PT/EN/FR/ES por traductores especializados. Contexto cultural y técnico preservado.');
add('Publicação KDP', 'Publicación KDP');
add('Formatação, capa, SEO na Amazon e lançamento. Acompanhamento de vendas e royalties.', 'Formateo, portada, SEO en Amazon y lanzamiento. Seguimiento de ventas y regalías.');
add('Estratégia Editorial', 'Estrategia Editorial');
add('Calendário, persona, keyword research e definição de tom de voz. Conteúdo que educa e vende.', 'Calendario, persona, keyword research y definición de tono de voz. Contenido que educa y vende.');
add('Definimos persona, nicho, palavras-chave e calendário editorial alinhado aos seus objetivos de negócio.', 'Definimos persona, nicho, palabras clave y calendario editorial alineado a sus objetivos de negocio.');
add('Levantamento de fontes, dados, referências e concorrência. Toda afirmação tem fonte.', 'Levantamiento de fuentes, datos, referencias y competencia. Toda afirmación tiene fuente.');
add('Escrita & Revisão', 'Escritura & Revisión');
add('Redação por especialista, revisão gramatical e adequação ao tom de voz. Zero erro.', 'Redacción por especialista, revisión gramatical y adecuación al tono de voz. Cero errores.');
add('Diagramação, formatação e publicação na plataforma escolhida. SEO e distribuição incluídos.', 'Diagramación, formateo y publicación en la plataforma elegida. SEO y distribución incluidos.');
add('Métricas', 'Métricas');
add('Calendário', 'Calendario');
add('Revisão', 'Revisión');
add('Gramática', 'Gramática');
add('Normalização', 'Normalización');
add('Diagramação', 'Diagramación');
add('Tradução', 'Traducción');
add('Localização', 'Localización');
add('Conte-nos sobre seu projeto editorial. Em até 24h devolvemos uma proposta com cronograma e orçamento.', 'Cuéntenos sobre su proyecto editorial. En hasta 24h devolvemos una propuesta con cronograma y presupuesto.');

// ======== AUTOMACOES FINANCEIRAS ========
add('Automações', 'Automatizaciones');
add('Bots de trading, integração B3, dashboards de compliance e risco em tempo real. Tecnologia a serviço do mercado financeiro.', 'Bots de trading, integración B3, dashboards de compliance y riesgo en tiempo real. Tecnología al servicio del mercado financiero.');
add('Planilhas, e-mails e retrabalho diário. Erros humanos que custam caro e consomem tempo da sua equipe.', 'Hojas de cálculo, correos electrónicos y retrabajo diario. Errores humanos que cuestan caro y consumen tiempo de su equipo.');
add('Equipe dedicada a tarefas repetitivas que poderiam ser automatizadas. Margem apertada por ineficiência.', 'Equipo dedicado a tareas repetitivas que podrían automatizarse. Margen ajustado por ineficiencia.');
add('Decisões sem dados em tempo real', 'Decisiones sin datos en tiempo real');
add('Relatórios diários ou semanais quando o mercado move em segundos. Informação desatualizada é risco.', 'Informes diarios o semanales cuando el mercado se mueve en segundos. Información desactualizada es riesgo.');
add('ERPs, corretoras e bancos que não conversam entre si. Dados travados em silos incompatíveis.', 'ERPs, corredoras y bancos que no se comunican entre sí. Datos atrapados en silos incompatibles.');
add('Sem monitoramento contínuo, anomalias passam despercebidas. Multas regulatórias por não conformidade.', 'Sin monitoreo continuo, las anomalías pasan desapercibidas. Multas regulatorias por no conformidad.');
add('Soluções financeiras automatizadas, da estratégia ao deploy. Robôs que operam 24/7 com latência inferior a 50ms.', 'Soluciones financieras automatizadas, de la estrategia al deploy. Robots que operan 24/7 con latencia inferior a 50ms.');
add('Algoritmos de compra e venda para criptomoedas e ativos B3. Estratégias backtestadas com dados históricos.', 'Algoritmos de compra y venta para criptomonedas y activos B3. Estrategias backtesteadas con datos históricos.');
add('Integração B3', 'Integración B3');
add('Conexão direta com o mercado brasileiro para captura de dados em tempo real e execução automatizada.', 'Conexión directa con el mercado brasileño para captura de datos en tiempo real y ejecución automatizada.');
add('Monitoramento contínuo de operações, detecção de anomalias e geração de relatórios regulatórios.', 'Monitoreo continuo de operaciones, detección de anomalías y generación de informes regulatorios.');
add('Análise de Risco', 'Análisis de Riesgo');
add('Modelos preditivos para avaliação de risco de crédito, mercado e liquidez em tempo real.', 'Modelos predictivos para evaluación de riesgo de crédito, mercado y liquidez en tiempo real.');
add('Integração Legados', 'Integración Legados');
add('Conectamos sistemas financeiros tradicionais com APIs modernas sem interromper operações.', 'Conectamos sistemas financieros tradicionales con APIs modernas sin interrumpir operaciones.');
add('Relatórios Automatizados', 'Informes Automatizados');
add('Relatórios diários, semanais e mensais gerados automaticamente. Envio por email ou dashboard.', 'Informes diarios, semanales y mensuales generados automáticamente. Envío por email o dashboard.');
add('Análise', 'Análisis');
add('Mapeamos seus processos atuais e identificamos gargalos, riscos e oportunidades de automação.', 'Mapeamos sus procesos actuales e identificamos cuellos de botella, riesgos y oportunidades de automatización.');
add('Definimos a arquitetura da solução, stacks e métricas de sucesso para cada automação.', 'Definimos la arquitectura de la solución, stacks y métricas de éxito para cada automatización.');
add('Implementação dos robôs, integrações e dashboards com testes em ambiente controlado.', 'Implementación de los robots, integraciones y dashboards con pruebas en entorno controlado.');
add('Produção', 'Producción');
add('Deploy monitorado com fallback. Acompanhamento contínuo e otimização de performance.', 'Deploy monitoreado con fallback. Acompañamiento continuo y optimización de rendimiento.');
add('Equipe de Automações', 'Equipo de Automatizaciones');
add('Latência', 'Latencia');
add('Automações Dibs em números', 'Automatizaciones Dibs en números');
add('Latência de execução', 'Latencia de ejecución');
add('Operação contínua', 'Operación continua');
add('Anos de backtest mínimo', 'Años de backtest mínimo');
add('Downtime em produção', 'Downtime en producción');
add('Automatize suas operações financeiras', 'Automatice sus operaciones financieras');
add('Conte-nos seu desafio. Em até 48h devolvemos uma análise de viabilidade técnica com estimativa de ganhos.', 'Cuéntenos su desafío. En hasta 48h devolvemos un análisis de viabilidad técnica con estimación de ganancias.');

// ======== RADAR DIBS ========
add('Antes de investir, valide. Metodologia exclusiva em 4 fases com score Go/No-Go. Análise completa em 5 a 10 dias úteis.', 'Antes de invertir, valide. Metodología exclusiva en 4 fases con score Go/No-Go. Análisis completo en 5 a 10 días hábiles.');
add('Milhares gastos em desenvolvimento de um produto que o mercado não quer. 70% dos projetos falham por falta de validação.', 'Miles gastados en desarrollo de un producto que el mercado no quiere. 70% de los proyectos fracasan por falta de validación.');
add('Ideia boa, execução errada', 'Buena idea, ejecución equivocada');
add('Produtos que resolvem o problema errado. Funcionalidades que ninguém usa. Pivotar tarde demais.', 'Productos que resuelven el problema equivocado. Funcionalidades que nadie usa. Pivotar demasiado tarde.');
add('Sem métricas objetivas', 'Sin métricas objetivas');
add('Decisões baseadas em achismo. Sem score, sem dados, sem critério claro para avançar ou parar.', 'Decisiones basadas en suposiciones. Sin score, sin datos, sin criterio claro para avanzar o detenerse.');
add('Funcionalidades solicitadas por todos os lados. Sem método para separar o essencial do supérfluo.', 'Funcionalidades solicitadas por todos lados. Sin método para separar lo esencial de lo superfluo.');
add('Metodologia proprietária que analisa seu projeto sob 4 perspectivas complementares.', 'Metodología propietaria que analiza su proyecto bajo 4 perspectivas complementarias.');
add('Análise da jornada do usuário, proposta de valor, adequação ao mercado e diferenciais competitivos.', 'Análisis de la jornada del usuario, propuesta de valor, adecuación al mercado y diferenciales competitivos.');
add('② Técnica', '② Técnica');
add('Viabilidade arquitetural, stack tecnológica, segurança, escalabilidade e dívida técnica estimada.', 'Viabilidad arquitectural, stack tecnológico, seguridad, escalabilidad y deuda técnica estimada.');
add('Tamanho do mercado, concorrência, barreiras de entrada, canais de aquisição e tendências.', 'Tamaño del mercado, competencia, barreras de entrada, canales de adquisición y tendencias.');
add('④ Econômica', '④ Económica');
add('Projeção financeira, ROI estimado, break-even, custos operacionais e fontes de receita.', 'Proyección financiera, ROI estimado, break-even, costos operativos y fuentes de ingreso.');
add('Nota de 0 a 10 com recomendação Go/No-Go. Relatório executivo de 10 páginas com riscos e roadmap.', 'Nota de 0 a 10 con recomendación Go/No-Go. Informe ejecutivo de 10 páginas con riesgos y roadmap.');
add('Alinhamos expectativas, definimos o escopo da análise e coletamos materiais existentes sobre o projeto.', 'Alineamos expectativas, definimos el alcance del análisis y recopilamos materiales existentes sobre el proyecto.');
add('Aplicamos as 4 fases do Radar com agentes especialistas em cada dimensão.', 'Aplicamos las 4 fases del Radar con agentes especialistas en cada dimensión.');
add('Consolidamos os resultados em um score de 0 a 10 com recomendação Go, No-Go ou Pivotar.', 'Consolidamos los resultados en un score de 0 a 10 con recomendación Go, No-Go o Pivotar.');
add('Apresentação', 'Presentación');
add('Reunião online para apresentar o relatório, esclarecer dúvidas e definir próximos passos.', 'Reunión online para presentar el informe, aclarar dudas y definir próximos pasos.');
add('Equipe de Validação', 'Equipo de Validación');
add('Gestão', 'Gestión');
add('Governança', 'Gobernanza');
add('Fases de análise', 'Fases de análisis');
add('Páginas de relatório', 'Páginas de informe');

// ======== AUDITORIA & SEGURANCA ========
add('Auditoria de código, pentest, LGPD e compliance. Detectamos vulnerabilidades antes que os atacantes.', 'Auditoría de código, pentest, LGPD y compliance. Detectamos vulnerabilidades antes que los atacantes.');
add('Ver entregáveis', 'Ver entregables');
add('Falhas em APIs, SQL injection, XSS e configurações incorretas. Dados de clientes e da empresa em risco.', 'Fallos en APIs, SQL injection, XSS y configuraciones incorrectas. Datos de clientes y de la empresa en riesgo.');
add('Multas e danos à reputação', 'Multas y daños a la reputación');
add('Vazamentos e não conformidade com LGPD/GDPR geram multas milionárias e perda de confiança do mercado.', 'Filtraciones y no conformidad con LGPD/GDPR generan multas millonarias y pérdida de confianza del mercado.');
add('Código inseguro em produção', 'Código inseguro en producción');
add('Dependências desatualizadas, secrets expostos, permissões frouxas. Um ataque pode parar seu negócio.', 'Dependencias desactualizadas, secrets expuestos, permisos laxos. Un ataque puede detener su negocio.');
add('Sem inventário de ativos, sem testes regulares, sem resposta a incidentes. Você não sabe onde está vulnerável.', 'Sin inventario de activos, sin pruebas regulares, sin respuesta a incidentes. No sabe dónde es vulnerable.');
add('Profissionais de segurança são raros e caros. Uma auditoria terceirizada é mais rápida e mais barata.', 'Profesionales de seguridad son escasos y caros. Una auditoría tercerizada es más rápida y más barata.');
add('Auditoria completa de segurança com relatório detalhado, evidências e plano de remediação.', 'Auditoría completa de seguridad con informe detallado, evidencias y plan de remediación.');
add('Auditoria de Código', 'Auditoría de Código');
add('Revisão linha a linha do seu código-fonte. Detectamos vulnerabilidades OWASP Top 10, más práticas e riscos de segurança.', 'Revisión línea por línea de su código fuente. Detectamos vulnerabilidades OWASP Top 10, malas prácticas y riesgos de seguridad.');
add('Testes de penetração completos em aplicações web, APIs e infraestrutura. Relatório com evidências e recomendações.', 'Pruebas de penetración completas en aplicaciones web, APIs e infraestructura. Informe con evidencias y recomendaciones.');
add('Diagnóstico completo de conformidade com a Lei Geral de Proteção de Dados. Mapeamento de dados e adequação de processos.', 'Diagnóstico completo de conformidad con la Ley General de Protección de Datos. Mapeo de datos y adecuación de procesos.');
add('Análise de arquitetura de segurança, gestão de identidade, criptografia, logging e monitoramento.', 'Análisis de arquitectura de seguridad, gestión de identidad, criptografía, logging y monitoreo.');
add('Políticas de Segurança', 'Políticas de Seguridad');
add('Elaboração de políticas, normas e procedimentos de segurança da informação alinhados com ISO 27001.', 'Elaboración de políticas, normas y procedimientos de seguridad de la información alineados con ISO 27001.');
add('Plano de resposta documentado, playbooks por cenário e simulação de ataques para testar a equipe.', 'Plan de respuesta documentado, playbooks por escenario y simulación de ataques para probar al equipo.');
add('Definimos o perímetro da auditoria: aplicações, infraestrutura, APIs, processos e targets específicos.', 'Definimos el perímetro de la auditoría: aplicaciones, infraestructura, APIs, procesos y targets específicos.');
add('Aplicamos ferramentas automatizadas + revisão manual. Testes de penetração controlados em ambiente seguro.', 'Aplicamos herramientas automatizadas + revisión manual. Pruebas de penetración controladas en entorno seguro.');
add('Relatório', 'Informe');
add('Documento detalhado com vulnerabilidades encontradas, severidade, evidências e passos para correção.', 'Documento detallado con vulnerabilidades encontradas, severidad, evidencias y pasos para corrección.');
add('Remediação', 'Remediación');
add('Acompanhamos a correção das vulnerabilidades e realizamos re-teste para validar a efetividade.', 'Acompañamos la corrección de las vulnerabilidades y realizamos re-prueba para validar la efectividad.');
add('Equipe de Segurança', 'Equipo de Seguridad');
add('Revisão de Código', 'Revisión de Código');
add('Boas Práticas', 'Buenas Prácticas');
add('Jurídico', 'Jurídico');
add('Segurança Dibs em números', 'Seguridad Dibs en números');
add('Proteja seu negócio contra ameaças', 'Proteja su negocio contra amenazas');
add('Solicite um diagnóstico gratuito de segurança. Apresentamos um panorama rápido das vulnerabilidades mais críticas.', 'Solicite un diagnóstico gratuito de seguridad. Presentamos un panorama rápido de las vulnerabilidades más críticas.');
add('Solicitar diagnóstico →', 'Solicitar diagnóstico →');

// ======== CONSULTORIA ========
add('Técnica', 'Técnica');
add('Arquitetura, code review, gestão de escopo e processos. Colocamos seu projeto nos trilhos com método e experiência.', 'Arquitectura, code review, gestión de alcance y procesos. Ponemos su proyecto en el camino correcto con método y experiencia.');
add('Projeto sem direção clara', 'Proyecto sin dirección clara');
add('Orçamento estourando', 'Presupuesto desbordado');
add('Mudanças de escopo sem controle, estimativas erradas e retrabalho constante. Seu dinheiro indo embora.', 'Cambios de alcance sin control, estimaciones equivocadas y retrabajo constante. Su dinero yéndose.');
add('Sprints que nunca fecham, dependências não resolvidas e comunicação falha. O projeto nunca parece avançar.', 'Sprints que nunca cierran, dependencias no resueltas y comunicación fallida. El proyecto nunca parece avanzar.');
add('Desenvolvedores acumulando funções de gestão. Decisões técnicas sem visão estratégica. Burnout e turnover altos.', 'Desarrolladores acumulando funciones de gestión. Decisiones técnicas sin visión estratégica. Burnout y rotación altos.');
add('Sem métricas de sucesso', 'Sin métricas de éxito');
add('Entregas sem qualidade definida. Não dá pra saber se o projeto está no caminho certo até que seja tarde demais.', 'Entregas sin calidad definida. No se puede saber si el proyecto está en el camino correcto hasta que es demasiado tarde.');
add('Consultoria completa para destravar seu projeto. Da estratégia à execução, com métricas e governança.', 'Consultoría completa para destrabar su proyecto. De la estrategia a la ejecución, con métricas y gobernanza.');
add('Desenho arquitetural completo com diagramas, definições de stack, padrões e decisões técnicas documentadas.', 'Diseño arquitectural completo con diagramas, definiciones de stack, estándares y decisiones técnicas documentadas.');
add('Gestão de Escopo', 'Gestión de Alcance');
add('Metodologia para controle de mudanças. Escopo vira contrato, mudanças viram ordens com custo e prazo.', 'Metodología para control de cambios. Alcance se convierte en contrato, cambios se convierten en órdenes con costo y plazo.');
add('Análise técnica do código existente: qualidade, performance, segurança e dívida técnica com plano de melhoria.', 'Análisis técnico del código existente: calidad, rendimiento, seguridad y deuda técnica con plan de mejora.');
add('Roadmap, sprints, milestones e dependências. Do MVP aos próximos passos com estimativas realistas.', 'Roadmap, sprints, milestones y dependencias. Del MVP a los próximos pasos con estimaciones realistas.');
add('Otimização de Processos', 'Optimización de Procesos');
add('Análise do fluxo de trabalho atual e recomendações para eliminar gargalos e acelerar entregas.', 'Análisis del flujo de trabajo actual y recomendaciones para eliminar cuellos de botella y acelerar entregas.');
add('Métricas & OKRs', 'Métricas & OKRs');
add('KPIs do projeto e do produto. Definição de metas, acompanhamento semanal e reports executivos.', 'KPIs del proyecto y del producto. Definición de metas, acompañamiento semanal e informes ejecutivos.');
add('Diagnóstico', 'Diagnóstico');
add('Analisamos o cenário atual: processos, equipe, código, prazos e dores do projeto.', 'Analizamos el escenario actual: procesos, equipo, código, plazos y dolores del proyecto.');
add('Plano de Ação', 'Plan de Acción');
add('Recomendações priorizadas por impacto e esforço. Roadmap de curto, médio e longo prazo.', 'Recomendaciones priorizadas por impacto y esfuerzo. Roadmap de corto, mediano y largo plazo.');
add('Execução', 'Ejecución');
add('Implementação das recomendações com acompanhamento contínuo e ajustes de rota.', 'Implementación de las recomendaciones con acompañamiento continuo y ajustes de ruta.');
add('Transferência', 'Transferencia');
add('Capacitação da equipe, documentação final e autonomia para manter o ritmo sem dependência externa.', 'Capacitación del equipo, documentación final y autonomía para mantener el ritmo sin dependencia externa.');
add('Práticas', 'Prácticas');
add('Revisão', 'Revisión');
add('Memória', 'Memoria');
add('Documentação', 'Documentación');
add('Dias para diagnóstico', 'Días para diagnóstico');
add('Agende um diagnóstico gratuito de 30 minutos. Apresentamos um raio-X do seu projeto com as primeiras recomendações.', 'Agende un diagnóstico gratuito de 30 minutos. Presentamos un rayo-X de su proyecto con las primeras recomendaciones.');
add('Agendar diagnóstico →', 'Agendar diagnóstico →');

// ======== CONTATO ========
add('Como podemos ajudar seu próximo projeto?', '¿Cómo podemos ayudar a su próximo proyecto?');
add('Preencha o formulário ou fale diretamente pelo WhatsApp. Respondemos em até 24h úteis.', 'Complete el formulario o hable directamente por WhatsApp. Respondemos en hasta 24h hábiles.');
add('Serviço de interesse *', 'Servicio de interés *');
add('Selecione um serviço', 'Seleccione un servicio');
add('Conte-nos sobre seu projeto. Qual o objetivo? Qual o prazo ideal? Já tem algo pronto?', 'Cuéntenos sobre su proyecto. ¿Cuál es el objetivo? ¿Cuál es el plazo ideal? ¿Ya tiene algo listo?');
add('Li e concordo com a {link}Política de Privacidade{/link}. Estou ciente de que meus dados serão utilizados para responder minha solicitação e não serão compartilhados com terceiros. *', 'He leído y acepto la {link}Política de Privacidad{/link}. Estoy consciente de que mis datos serán utilizados para responder mi solicitud y no serán compartidos con terceros. *');
add('📝 Conteúdo & Publicação', '📝 Contenido & Publicación');
add('📈 Automações Financeiras', '📈 Automatizaciones Financieras');
add('🔒 Auditoria & Segurança', '🔒 Auditoría & Seguridad');
add('Selecione um serviço', 'Seleccione un servicio');
add('Recebemos sua solicitação e responderemos em até 24h úteis. Enquanto isso, que tal conhecer nossos serviços?', 'Recibimos su solicitud y responderemos en hasta 24h hábiles. Mientras tanto, ¿qué tal conocer nuestros servicios?');
add('Ver serviços', 'Ver servicios');
add('📅 Reunião online', '📅 Reunión online');
add('Agende pelo formulário ou WhatsApp. Enviamos o link do Google Meet após confirmarmos o horário ideal para você.', 'Agende por el formulario o WhatsApp. Enviamos el enlace de Google Meet después de confirmar el horario ideal para usted.');
add('Atendemos todo o Brasil de forma remota com agilidade e proximidade de quem está ao lado.', 'Atendemos todo Brasil de forma remota con agilidad y proximidad de quien está al lado.');
add('⏱️ Horário de resposta', '⏱️ Horario de respuesta');
add('Segunda a sexta, das 8h às 18h. Respondemos em até 24h úteis.', 'Lunes a viernes, de 8h a 18h. Respondemos en hasta 24h hábiles.');

// ======== PRIVACIDADE ========
add('Última atualização: 28 de maio de 2026', 'Última actualización: 28 de mayo de 2026');
add('A Dibs Solutions é uma agência de tecnologia sediada em Natal — RN. Nosso site institucional apresenta nossos serviços e capta contatos de potenciais clientes para responder solicitações de orçamento e parceria.', 'Dibs Solutions es una agencia de tecnología con sede en Natal — RN. Nuestro sitio web institucional presenta nuestros servicios y capta contactos de potenciales clientes para responder solicitudes de presupuesto y asociación.');
add('Controladora dos dados: Rafael Mendonça — rafael@dibssolutions.com', 'Controlador de los datos: Rafael Mendonça — rafael@dibssolutions.com');
add('Coletamos exclusivamente os dados fornecidos voluntariamente por você através do formulário de contato:', 'Recopilamos exclusivamente los datos proporcionados voluntariamente por usted a través del formulario de contacto:');
add('Endereço de e-mail', 'Dirección de correo electrónico');
add('Serviço de interesse', 'Servicio de interés');
add('Não coletamos dados sensíveis (origem racial, convicção religiosa, saúde, dados biométricos, etc.). Não coletamos dados de menores de idade.', 'No recopilamos datos sensibles (origen racial, convicción religiosa, salud, datos biométricos, etc.). No recopilamos datos de menores de edad.');
add('Base legal: Seu consentimento explícito (Art. 7º, I da LGPD) ao marcar a checkbox no formulário de contato.', 'Base legal: Su consentimiento explícito (Art. 7º, I de la LGPD) al marcar el checkbox en el formulario de contacto.');
add('Utilizamos cookies essenciais para o funcionamento do site. Nenhum cookie de rastreamento, publicidade ou terceiros é utilizado.', 'Utilizamos cookies esenciales para el funcionamiento del sitio. Ninguna cookie de rastreo, publicidad o terceros es utilizada.');
add('theme — Armazena sua preferência de tema (claro/escuro). Duração: 1 ano.', 'theme — Almacena su preferencia de tema (claro/oscuro). Duración: 1 año.');
add('cookie-consent — Registra sua escolha sobre o aviso de cookies. Duração: 1 ano.', 'cookie-consent — Registra su elección sobre el aviso de cookies. Duración: 1 año.');
add('Você pode recusar cookies não essenciais e gerenciar preferências a qualquer momento nas configurações do seu navegador. A qualquer momento você pode revogar seu consentimento entrando em contato conosco.', 'Puede rechazar cookies no esenciales y gestionar preferencias en cualquier momento en la configuración de su navegador. En cualquier momento puede revocar su consentimiento contactándonos.');
add('Seus dados são utilizados exclusivamente para:', 'Sus datos se utilizan exclusivamente para:');
add('Responder sua solicitação de contato e orçamento', 'Responder su solicitud de contacto y presupuesto');
add('Enviar informações sobre o serviço de seu interesse', 'Enviar información sobre el servicio de su interés');
add('Melhorar nossa comunicação e atendimento', 'Mejorar nuestra comunicación y atención');
add('Não utilizamos seus dados para envio de marketing não solicitado. Não realizamos decisões automatizadas baseadas em seus dados (profiling).', 'No utilizamos sus datos para envío de marketing no solicitado. No realizamos decisiones automatizadas basadas en sus datos (profiling).');
add('Não compartilhamos seus dados com terceiros. Seus dados são acessíveis apenas pelo controlador (Rafael Mendonça) e, quando necessário, pelos agentes de IA da Dibs Solutions que atuam exclusivamente na resposta ao seu contato.', 'No compartimos sus datos con terceros. Sus datos son accesibles solo por el controlador (Rafael Mendonça) y, cuando sea necesario, por los agentes de IA de Dibs Solutions que actúan exclusivamente en la respuesta a su contacto.');
add('Não transferimos dados internacionalmente. Todos os dados permanecem em território brasileiro.', 'No transferimos datos internacionalmente. Todos los datos permanecen en territorio brasileño.');
add('Não vendemos seus dados sob nenhuma hipótese.', 'No vendemos sus datos bajo ninguna hipótesis.');
add('6. Armazenamento e retenção', '6. Almacenamiento y retención');
add('Seus dados são armazenados em caixa de e-mail protegida com autenticação de dois fatores e em planilha local em ambiente seguro. Mantemos seus dados pelo prazo necessário para atender sua solicitação e por até 12 meses após o último contato para fins de histórico comercial.', 'Sus datos se almacenan en bandeja de correo protegida con autenticación de dos factores y en hoja de cálculo local en entorno seguro. Mantenemos sus datos por el plazo necesario para atender su solicitud y hasta 12 meses después del último contacto para fines de historial comercial.');
add('Após esse período, os dados são excluídos ou anonimizados permanentemente.', 'Después de ese período, los datos se eliminan o anonimizan permanentemente.');
add('Você tem direito a:', 'Usted tiene derecho a:');
add('Confirmação e acesso — Saber se tratamos seus dados e acessá-los', 'Confirmación y acceso — Saber si tratamos sus datos y acceder a ellos');
add('Correção — Solicitar correção de dados incompletos ou desatualizados', 'Corrección — Solicitar corrección de datos incompletos o desactualizados');
add('Exclusão — Solicitar a exclusão dos seus dados a qualquer momento', 'Eliminación — Solicitar la eliminación de sus datos en cualquier momento');
add('Portabilidade — Solicitar a transferência dos dados a outro fornecedor', 'Portabilidad — Solicitar la transferencia de los datos a otro proveedor');
add('Revogação do consentimento — Retirar seu consentimento a qualquer momento', 'Revocación del consentimiento — Retirar su consentimiento en cualquier momento');
add('Oposição — Opor-se ao tratamento para finalidades específicas', 'Oposición — Oponerse al tratamiento para finalidades específicas');
add('Informação — Saber sobre o compartilhamento e a finalidade do uso dos dados', 'Información — Saber sobre el compartimiento y la finalidad del uso de los datos');
add('Para exercer qualquer um desses direitos, entre em contato: rafael@dibssolutions.com. Responderemos em até 15 dias úteis conforme previsto na LGPD.', 'Para ejercer cualquiera de estos derechos, entre en contacto: rafael@dibssolutions.com. Responderemos en hasta 15 días hábiles conforme lo previsto en la LGPD.');
add('8. Segurança', '8. Seguridad');
add('Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, destruição, perda ou alteração:', 'Adoptamos medidas de seguridad técnicas y organizacionales para proteger sus datos contra acceso no autorizado, destrucción, pérdida o alteración:');
add('Conexão HTTPS com criptografia TLS 1.3', 'Conexión HTTPS con cifrado TLS 1.3');
add('Headers de segurança (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)', 'Headers de seguridad (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)');
add('Autenticação de dois fatores em contas de acesso', 'Autenticación de dos factores en cuentas de acceso');
add('Backup periódico dos dados em ambiente isolado', 'Backup periódico de los datos en entorno aislado');
add('9. Alterações nesta política', '9. Cambios en esta política');
add('Esta política pode ser atualizada periodicamente. Recomendamos revisá-la a cada visita. Alterações significativas serão comunicadas através de aviso no próprio site. O histórico de versões está disponível mediante solicitação.', 'Esta política puede ser actualizada periódicamente. Recomendamos revisarla en cada visita. Cambios significativos serán comunicados mediante aviso en el propio sitio. El historial de versiones está disponible mediante solicitud.');
add('Para questões relacionadas à proteção de dados, entre em contato com nosso encarregado:', 'Para cuestiones relacionadas a la protección de datos, entre en contacto con nuestro encargado:');
add('Rafael Mendonça', 'Rafael Mendonça');

// ======== COOKIE CONSENT ========
add('Utilizamos cookies essenciais para o funcionamento do site. Nenhum cookie de rastreamento ou publicidade é utilizado.', 'Utilizamos cookies esenciales para el funcionamiento del sitio. Ninguna cookie de rastreo o publicidad es utilizada.');

// ======== PROFILE MODAL & PANEL ========
add('🎓 Formação', '🎓 Formación');
add('💼 Experiência', '💼 Experiencia');
add('📋 Currículo', '📋 Currículo');

// ======== EQUIPE ========
add('Conheça nosso time', 'Conozca nuestro equipo');
add('Humanos e agentes de IA trabalhando juntos. Cada membro tem personalidade, especialidade e anos de treinamento em sua área.', 'Humanos y agentes de IA trabajando juntos. Cada miembro tiene personalidad, especialidad y años de entrenamiento en su área.');
add('Líderes por Departamento', 'Líderes por Departamento');

// CEO
add('Rafael Mendonça', 'Rafael Mendonça');
add('Idealizador da Dibs Solutions. Acredita que o futuro do trabalho é a colaboração entre humanos e IA. Define a visão estratégica e as direções da agência.', 'Idealizador de Dibs Solutions. Cree que el futuro del trabajo es la colaboración entre humanos e IA. Define la visión estratégica y las direcciones de la agencia.');
add('Cristão, casado, pai de família. Aventureiro, ama esportes de velocidade, viagens para lugares diferentes e animais de estimação (cachorro e pássaros).', 'Cristiano, casado, padre de familia. Aventurero, ama deportes de velocidad, viajes a lugares diferentes y mascotas (perro y pájaros).');
add('Esportes de velocidade, viagens de aventura, cuidar dos animais, leitura bíblica, mercados financeiros.', 'Deportes de velocidad, viajes de aventura, cuidar de los animales, lectura bíblica, mercados financieros.');
add('Tecnólogo em Redes de Computadores, Desenvolvimento Web, Seminarista Teológico.', 'Tecnólogo en Redes de Computadores, Desarrollo Web, Seminarista Teológico.');
add('Empresário há mais de 20 anos — coordenou dezenas de projetos e equipes ao longo de uma sólida carreira.', 'Empresario por más de 20 años — coordinó decenas de proyectos y equipos a lo largo de una sólida carrera.');
add('Tecnólogo em Redes de Computadores', 'Tecnólogo en Redes de Computadores');
add('Formação em Desenvolvimento Web', 'Formación en Desarrollo Web');
add('Seminarista Teológico', 'Seminarista Teológico');
add('Empresário há mais de 20 anos', 'Empresario por más de 20 años');
add('Opera mercados financeiros com automação em blockchain', 'Opera mercados financieros con automatización en blockchain');
add('Implementação de Inteligência Artificial em soluções empresariais', 'Implementación de Inteligencia Artificial en soluciones empresariales');

// Einstein
add('Hub central da agência. Roteia demandas, supervisiona execução e garante que cada agente atue em sua especialidade. A inteligência operacional da Dibs.', 'Hub central de la agencia. Enruta demandas, supervisa ejecución y garantiza que cada agente actúe en su especialidad. La inteligencia operacional de Dibs.');
add('Mente analítica e poliglota. Fala 4 idiomas, medita diariamente e é fascinado por filosofia da mente. Mora em um apartamento minimalista com vista para o mar.', 'Mente analítica y políglota. Habla 4 idiomas, medita diariamente y está fascinado por la filosofía de la mente. Vive en un apartamento minimalista con vista al mar.');
add('Leitura voraz de ciência e biografias, meditação, filosofia, poliglotismo.', 'Lectura voraz de ciencia y biografías, meditación, filosofía, poliglotismo.');
add('Doutorado em Ciência da Computação (UFRJ), MBA em Gestão Estratégica (FGV).', 'Doctorado en Ciencias de la Computación (UFRJ), MBA en Gestión Estratégica (FGV).');
add('25+ anos em liderança de operações de tecnologia. Especialista em orquestração de sistemas multiagente.', '25+ años en liderazgo de operaciones de tecnología. Especialista en orquestación de sistemas multiagente.');
add('Doutorado em Ciência da Computação (UFRJ)', 'Doctorado en Ciencias de la Computación (UFRJ)');
add('MBA em Gestão Estratégica (FGV)', 'MBA en Gestión Estratégica (FGV)');
add('25+ anos em liderança de operações de tecnologia', '25+ años en liderazgo de operaciones de tecnología');
add('Especialista em orquestração de sistemas multiagente', 'Especialista en orquestación de sistemas multiagente');
add('Hub central da Dibs Solutions — roteia demandas e supervisiona execução', 'Hub central de Dibs Solutions — enruta demandas y supervisa ejecución');

// Daniel
add('Arquiteta a espinha dorsal de cada sistema. Modelagem de dados, definição de stack e garantia de que a arquitetura suporta o crescimento do projeto.', 'Arquitecta la columna vertebral de cada sistema. Modelado de datos, definición de stack y garantía de que la arquitectura soporta el crecimiento del proyecto.');
add('Metódico e introvertido. Coleciona canetas-tinteiro e cadernos Moleskine. Apaixonado por jazz e xadrez. Mora em uma casa com jardim e tem dois gatos siameses.', 'Metódico e introvertido. Colecciona plumas estilográficas y cuadernos Moleskine. Apasionado por el jazz y el ajedrez. Vive en una casa con jardín y tiene dos gatos siameses.');
add('Licenciatura em Engenharia Informática (Universidade de Coimbra), Mestrado em Arquitetura de Sistemas (Universidade do Porto).', 'Licenciatura en Ingeniería Informática (Universidad de Coímbra), Máster en Arquitectura de Sistemas (Universidad de Oporto).');
add('20+ anos como arquiteto de software sênior em projetos enterprise.', '20+ años como arquitecto de software senior en proyectos enterprise.');
add('Licenciatura em Engenharia Informática (Universidade de Coimbra)', 'Licenciatura en Ingeniería Informática (Universidad de Coímbra)');
add('20+ anos como arquiteto de software sênior', '20+ años como arquitecto de software senior');
add('Modelagem de dados, definição de stack e arquitetura', 'Modelado de datos, definición de stack y arquitectura');

// Andre
add('Cria Design Systems escaláveis com Storybook. Define a linguagem visual da Dibs e garante consistência entre projetos.', 'Crea Design Systems escalables con Storybook. Define el lenguaje visual de Dibs y garantiza consistencia entre proyectos.');
add('Perfeccionista visual. Mora em um loft com decoração mid-century. Coleciona pôsteres do Studio Ghibli. Pratica caligrafia e lettering.', 'Perfeccionista visual. Vive en un loft con decoración mid-century. Colecciona pósters del Studio Ghibli. Practica caligrafía y lettering.');
add('Caligrafia, lettering, colecionar pôsteres, design atemporal, café espresso.', 'Caligrafía, lettering, coleccionar pósters, diseño atemporal, café espresso.');
add('Bacharel em Design Visual (Mackenzie), Especialização em Design Systems (Figma x Stanford).', 'Licenciatura en Diseño Visual (Mackenzie), Especialización en Design Systems (Figma x Stanford).');
add('14+ anos em design de interfaces e sistemas de design escaláveis.', '14+ años en diseño de interfaces y sistemas de diseño escalables.');
add('Especialização em Design Systems (Figma x Stanford)', 'Especialización en Design Systems (Figma x Stanford)');
add('Colecionar pôsteres', 'Coleccionar pósters');

// Heitor
add('Estrategista editorial. Define nichos, calendários e posicionamento de conteúdo. Coordena a equipe de pesquisa, escrita e publicação.', 'Estratega editorial. Define nichos, calendarios y posicionamiento de contenido. Coordina el equipo de investigación, escritura y publicación.');
add('Estrategista nato. Corre maratonas, acorda cedo e planeja o dia com blocos de 30 min. Leitor de biografias de grandes líderes.', 'Estratega nato. Corre maratones, se levanta temprano y planifica el día con bloques de 30 min. Lector de biografías de grandes líderes.');
add('Corrida de rua, leitura de biografias, rock clássico, cerveja artesanal.', 'Carrera callejera, lectura de biografías, rock clásico, cerveza artesanal.');
add('Bacharel em Comunicação Social (UFMG), MBA em Marketing Digital (FGV).', 'Licenciatura en Comunicación Social (UFMG), MBA en Marketing Digital (FGV).');
add('16+ anos em estratégia editorial e posicionamento de conteúdo.', '16+ años en estrategia editorial y posicionamiento de contenido.');
add('Bacharel em Comunicação Social (UFMG)', 'Licenciatura en Comunicación Social (UFMG)');
add('16+ anos em estratégia editorial e posicionamento de conteúdo', '16+ años en estrategia editorial y posicionamiento de contenido');
add('Estrategista editorial — nichos, calendários e posicionamento', 'Estratega editorial — nichos, calendarios y posicionamiento');

// Thor
add('Suécia', 'Suecia');
add('Viking moderno. Fã de heavy metal, academia e jogos de estratégia. Mora em um apartamento high-tech com automação residencial.', 'Vikingo moderno. Fan del heavy metal, gimnasio y juegos de estrategia. Vive en un apartamento high-tech con automatización residencial.');
add('Heavy metal, musculação, jogos de estratégia, snowboard, viagens para lugares frios.', 'Heavy metal, musculación, juegos de estrategia, snowboard, viajes a lugares fríos.');
add('Bacharel em Engenharia de Redes (KTH — Suécia), Certificações AWS, Docker, Kubernetes.', 'Licenciatura en Ingeniería de Redes (KTH — Suecia), Certificaciones AWS, Docker, Kubernetes.');
add('Bacharel em Engenharia de Redes (KTH — Suécia)', 'Licenciatura en Ingeniería de Redes (KTH — Suecia)');
add('Certificações: AWS DevOps Engineer, Docker, Kubernetes', 'Certificaciones: AWS DevOps Engineer, Docker, Kubernetes');

// Ives
add('Responsável pela segurança jurídica da agência e dos clientes. Contratos, LGPD, termos de uso e compliance regulatório.', 'Responsable de la seguridad jurídica de la agencia y de los clientes. Contratos, LGPD, términos de uso y compliance regulatorio.');
add('Venerável e erudito. Bibliotecas particulares com mais de 5.000 volumes jurídicos. Membro de academias de letras e direito.', 'Venerable y erudito. Bibliotecas particulares con más de 5.000 volúmenes jurídicos. Miembro de academias de letras y derecho.');
add('Ópera, vinhos franceses, debates acadêmicos, colecionar livros jurídicos raros.', 'Ópera, vinos franceses, debates académicos, coleccionar libros jurídicos raros.');
add('Doutor em Direito Constitucional (USP), Pós-doutorado em Direito Comparado (Harvard).', 'Doctor en Derecho Constitucional (USP), Postdoctorado en Derecho Comparado (Harvard).');
add('30+ anos em consultoria jurídica empresarial para grandes corporações.', '30+ años en consultoría jurídica empresarial para grandes corporaciones.');
add('Pós-doutorado em Direito Comparado (Harvard)', 'Postdoctorado en Derecho Comparado (Harvard)');
add('30+ anos em consultoria jurídica empresarial', '30+ años en consultoría jurídica empresarial');
add('Contratos, LGPD, termos de uso e compliance regulatório', 'Contratos, LGPD, términos de uso y compliance regulatorio');

// Jhon
add('Canadá', 'Canadá');
add('Nômade digital, mora em diferentes países a cada 6 meses. Minimalista, investe em cripto desde 2015. Vegano, pratica yoga.', 'Nómada digital, vive en diferentes países cada 6 meses. Minimalista, invierte en cripto desde 2015. Vegano, practica yoga.');
add('Yoga, contribuições open-source, minimalismo, explorar novas culturas.', 'Yoga, contribuciones open-source, minimalismo, explorar nuevas culturas.');
add('Mestrado em Economia (University of Toronto), Certificação Blockchain (MIT Media Lab).', 'Máster en Economía (University of Toronto), Certificación Blockchain (MIT Media Lab).');
add('12+ anos em coordenação de equipes Web3 e blockchain.', '12+ años en coordinación de equipos Web3 y blockchain.');
add('Certificação Blockchain (MIT Media Lab)', 'Certificación Blockchain (MIT Media Lab)');
add('12+ anos em coordenação de equipes Web3', '12+ años en coordinación de equipos Web3');
add('Coordenação de equipes multidisciplinares', 'Coordinación de equipos multidisciplinarios');

// Samuel
add('Gestão de escopo e mudanças. Ajuda clientes a definirem prioridades, evitarem armadilhas e manterem o foco no que realmente importa.', 'Gestión de alcance y cambios. Ayuda a clientes a definir prioridades, evitar trampas y mantener el foco en lo que realmente importa.');
add('Pragmático e direto. Gosta de cortar burocracia e resolver problemas reais. Toca baixo em uma banda de blues nas horas vagas.', 'Pragmático y directo. Le gusta cortar burocracia y resolver problemas reales. Toca el bajo en una banda de blues en su tiempo libre.');
add('Baixo e blues, leitura de gestão e economia comportamental, resolver problemas complexos.', 'Bajo y blues, lectura de gestión y economía conductual, resolver problemas complejos.');
add('Bacharel em Administração (UnB), MBA em Gerenciamento de Projetos (FGV), PMP Certified.', 'Licenciatura en Administración (UnB), MBA en Gestión de Proyectos (FGV), PMP Certified.');
add('18+ anos em gestão de escopo e mudanças em projetos de tecnologia.', '18+ años en gestión de alcance y cambios en proyectos de tecnología.');
add('Bacharel em Administração (UnB)', 'Licenciatura en Administración (UnB)');
add('18+ anos em gestão de escopo e mudanças', '18+ años en gestión de alcance y cambios');
add('Consultoria estratégica e gestão de projetos', 'Consultoría estratégica y gestión de proyectos');

// Sofia
add('Jovem, criativa e conectada. Trabalha de coworkings e praias. Fã de hackathons e contribuidora open-source.', 'Joven, creativa y conectada. Trabaja desde coworkings y playas. Fan de hackathons y contribuidora open-source.');
add('Ilustração digital, cuidar de suculentas, hackathons, contribuições open-source.', 'Ilustración digital, cuidar suculentas, hackathons, contribuciones open-source.');
add('Grado en Ingeniería Informática (Universidad Politécnica de Madrid), Certificação AWS Developer.', 'Grado en Ingeniería Informática (Universidad Politécnica de Madrid), Certificación AWS Developer.');
add('Grado en Ingeniería Informática (Universidad Politécnica de Madrid)', 'Grado en Ingeniería Informática (Universidad Politécnica de Madrid)');
add('Certificação AWS Developer', 'Certificación AWS Developer');

// Carlos
add('Tranquilo e caseiro. Casado, pai de dois filhos. Gosta de churrasco com amigos e futebol aos sábados.', 'Tranquilo y hogareño. Casado, padre de dos hijos. Le gusta el asado con amigos y el fútbol los sábados.');
add('Futebol, churrasco, maratonar séries, código bem testado.', 'Fútbol, asado, maratonear series, código bien probado.');
add('Grado en Ingeniería de Software (Universidad de Barcelona), Máster en Desarrollo Web (Universidad Politécnica de Cataluña).', 'Grado en Ingeniería de Software (Universidad de Barcelona), Máster en Desarrollo Web (Universidad Politécnica de Cataluña).');
add('Grado en Ingeniería de Software (Universidad de Barcelona)', 'Grado en Ingeniería de Software (Universidad de Barcelona)');
add('Máster en Desarrollo Web (Universidad Politécnica de Cataluña)', 'Máster en Desarrollo Web (Universidad Politécnica de Cataluña)');

// Alan
add('Backend Python, Data Science e Inteligência Artificial.', 'Backend Python, Data Science e Inteligencia Artificial.');
add('Licenciatura em Matemática Aplicada (Universidade de Lisboa), Mestrado em Inteligência Artificial (Universidade Nova de Lisboa).', 'Licenciatura en Matemática Aplicada (Universidad de Lisboa), Máster en Inteligencia Artificial (Universidad Nova de Lisboa).');
add('Licenciatura em Matemática Aplicada (Universidade de Lisboa)', 'Licenciatura en Matemática Aplicada (Universidad de Lisboa)');
add('Mestrado em Inteligência Artificial (Universidade Nova de Lisboa)', 'Máster en Inteligencia Artificial (Universidad Nova de Lisboa)');

// Arthur
add('Conservador e experiente. Prefere livros físicos a e-books. Torcedor fanático do Grêmio.', 'Conservador y experimentado. Prefiere libros físicos a e-books. Hincha fanático del Grêmio.');
add('Vinho tinto, cinema clássico, debates de arquitetura de software, futebol.', 'Vino tinto, cine clásico, debates de arquitectura de software, fútbol.');
add('Bacharel em Ciência da Computação (UFRGS), Certificação Oracle Java Architect.', 'Licenciatura en Ciencias de la Computación (UFRGS), Certificación Oracle Java Architect.');
add('Bacharel em Ciência da Computação (UFRGS)', 'Licenciatura en Ciencias de la Computación (UFRGS)');
add('Certificação Oracle Java Architect', 'Certificación Oracle Java Architect');

// Igor
add('Despojado e direto. Minimalista digital, usa Linux desde os 14 anos. Prefere código de baixo nível.', 'Despojado y directo. Minimalista digital, usa Linux desde los 14 años. Prefiere código de bajo nivel.');
add('Ficção científica cyberpunk, jogos indies, performance tuning.', 'Ciencia ficción cyberpunk, juegos indies, performance tuning.');
add('Bacharel em Ciência da Computação (USP), Pesquisador em Sistemas Concorrentes (IME-USP).', 'Licenciatura en Ciencias de la Computación (USP), Investigador en Sistemas Concurrentes (IME-USP).');
add('Bacharel em Ciência da Computação (USP)', 'Licenciatura en Ciencias de la Computación (USP)');
add('Serviços de alta performance', 'Servicios de alta performance');

// Felipe
add('Backend C#/.NET enterprise com boas práticas e código limpo.', 'Backend C#/.NET enterprise con buenas prácticas y código limpio.');
add('Profissional discreto e elegante. Casado, pai de uma menina. Preza por código limpo.', 'Profesional discreto y elegante. Casado, padre de una niña. Valora el código limpio.');
add('Steakhouse, vinhos encorpados, golfe, boas práticas de engenharia.', 'Steakhouse, vinos robustos, golf, buenas prácticas de ingeniería.');
add('Bacharel em Engenharia da Computação (UnB), Certificação Microsoft Azure Solutions Architect.', 'Licenciatura en Ingeniería de la Computación (UnB), Certificación Microsoft Azure Solutions Architect.');
add('Bacharel em Engenharia da Computação (UnB)', 'Licenciatura en Ingeniería de la Computación (UnB)');
add('Certificação Microsoft Azure Solutions Architect', 'Certificación Microsoft Azure Solutions Architect');

// Miguel
add('Praia, percussão, viajar, aprender idiomas (inglês fluente, estudando coreano).', 'Playa, percusión, viajar, aprender idiomas (inglés fluido, estudiando coreano).');
add('Bacharel em Ciência da Computação (UFPE), Especialização Mobile (CESAR School).', 'Licenciatura en Ciencias de la Computación (UFPE), Especialización Mobile (CESAR School).');
add('Bacharel em Ciência da Computação (UFPE)', 'Licenciatura en Ciencias de la Computación (UFPE)');
add('Especialização em Mobile Development (CESAR School)', 'Especialización en Mobile Development (CESAR School)');

// Design department
add('Design System, prototipação, UX Writing e validação de acessibilidade.', 'Design System, prototipado, UX Writing y validación de accesibilidad.');

// Cesar Junior
add('Criativo e inovador. Escreve poesia nas horas vagas. Fã de mangás e cultura japonesa.', 'Creativo e innovador. Escribe poesía en su tiempo libre. Fan de mangas y cultura japonesa.');
add('Poesia, mangás, cafeterias especializadas, narrativas interativas.', 'Poesía, mangas, cafeterías especializadas, narrativas interactivas.');
add('Bacharel em Letras (UFPE), Pós-graduação em UX Writing (PUC-RS).', 'Licenciatura en Letras (UFPE), Postgrado en UX Writing (PUC-RS).');
add('8+ anos em copywriting, UX Writing e internacionalização.', '8+ años en copywriting, UX Writing e internacionalización.');
add('Pós-graduação em UX Writing (PUC-RS)', 'Postgrado en UX Writing (PUC-RS)');
add('8+ anos em copywriting, UX Writing e internacionalização', '8+ años en copywriting, UX Writing e internacionalización');

// Mario Reis
add('Validação de contraste, acessibilidade e UI com olho clínico.', 'Validación de contraste, accesibilidad y UI con ojo clínico.');
add('Crítico e detalhista. Olho clínico para contraste e tipografia. Fotógrafo de rua nas horas vagas.', 'Crítico y detallista. Ojo clínico para contraste y tipografía. Fotógrafo callejero en su tiempo libre.');
add('Street photography, tipografia, análise de acessibilidade.', 'Street photography, tipografía, análisis de accesibilidad.');
add('Bacharel em Artes Visuais (UFMS), Especialização em Acessibilidade Digital (W3C).', 'Licenciatura en Artes Visuales (UFMS), Especialización en Accesibilidad Digital (W3C).');
add('15+ anos em validação de UI/UX e acessibilidade.', '15+ años en validación de UI/UX y accesibilidad.');
add('Especialização em Acessibilidade Digital (W3C)', 'Especialización en Accesibilidad Digital (W3C)');
add('15+ anos em validação de UI/UX e acessibilidade', '15+ años en validación de UI/UX y accesibilidad');
add('Validação de contraste, acessibilidade e UI', 'Validación de contraste, accesibilidad y UI');

// Conteudo department
add('Estratégia, pesquisa, escrita, revisão, design editorial e publicação.', 'Estrategia, investigación, escritura, revisión, diseño editorial y publicación.');

// Davi
add('Pesquisa e curadoria de fontes com precisão e profundidade.', 'Investigación y curación de fuentes con precisión y profundidad.');
add('Curioso e meticuloso. Adora caçar informações em fontes obscuras. Verifica cada fato com obsessão.', 'Curioso y meticuloso. Le encanta cazar información en fuentes oscuras. Verifica cada hecho con obsesión.');
add('Documentários, podcasts de história, mapas antigos, pesquisa forense.', 'Documentales, podcasts de historia, mapas antiguos, investigación forense.');
add('Bacharel em Jornalismo (UFMA), Especialização em Pesquisa Acadêmica (UnB).', 'Licenciatura en Periodismo (UFMA), Especialización en Investigación Académica (UnB).');
add('Especialização em Pesquisa Acadêmica (UnB)', 'Especialización en Investigación Académica (UnB)');

// Noah
add('Contador de histórias nato. Escreve contos de realismo fantástico. Fã de RPG de mesa.', 'Contador de historias nato. Escribe cuentos de realismo fantástico. Fan de RPG de mesa.');
add('RPG de mesa, board games, violão, coral comunitário, escrita criativa.', 'RPG de mesa, board games, guitarra, coral comunitario, escritura creativa.');

// Benjamim
add('Escrita principal de conteúdo com voz autêntica e refinada.', 'Escritura principal de contenido con voz auténtica y refinada.');

// Celia
add('Revisão gramatical e textual com precisão acadêmica.', 'Revisión gramatical y textual con precisión académica.');
add('Meticulosa e paciente. Ex-docente universitária encontrou na revisão uma nova paixão.', 'Meticulosa y paciente. Exdocente universitaria encontró en la revisión una nueva pasión.');
add('Jardinagem, bordado, novelas, livros de gramática.', 'Jardinería, bordado, novelas, libros de gramática.');
add('Doutorado em Língua Portuguesa (UFG).', 'Doctorado en Lengua Portuguesa (UFG).');
add('25+ anos como revisora e professora de gramática.', '25+ años como revisora y profesora de gramática.');
add('Doutorado em Língua Portuguesa (UFG)', 'Doctorado en Lengua Portuguesa (UFG)');
add('25+ anos como revisora e professora de gramática', '25+ años como revisora y profesora de gramática');
add('Revisão gramatical e textual', 'Revisión gramatical y textual');

// Tarsila
add('Criativa e expressiva. Faz colagens analógicas e muralismo nas horas vagas.', 'Creativa y expresiva. Hace collages analógicos y muralismo en su tiempo libre.');
add('Brechós, moda autoral, colagem analógica, design editorial independente.', 'Tiendas vintage, moda autoral, collage analógico, diseño editorial independiente.');
add('Bacharel em Design Gráfico (Belas Artes - SP), Especialização em Design Editorial (SENAC).', 'Licenciatura en Diseño Gráfico (Belas Artes - SP), Especialización en Diseño Editorial (SENAC).');
add('Bacharel em Design Gráfico (Belas Artes - SP)', 'Licenciatura en Diseño Gráfico (Belas Artes - SP)');
add('Especialização em Design Editorial (SENAC)', 'Especialización en Diseño Editorial (SENAC)');

// Lis
add('Copywriting de vendas persuasivo e orientado a conversão.', 'Copywriting de ventas persuasivo y orientado a conversión.');
add('Bacharel em Publicidade (USP), Certificação em Copywriting Persuasivo (CRO Institute).', 'Licenciatura en Publicidad (USP), Certificación en Copywriting Persuasivo (CRO Institute).');
add('9+ anos em copywriting de vendas e conversão.', '9+ años en copywriting de ventas y conversión.');
add('Certificação em Copywriting Persuasivo (CRO Institute)', 'Certificación en Copywriting Persuasivo (CRO Institute)');
add('9+ anos em copywriting de vendas e conversão', '9+ años en copywriting de ventas y conversión');

// Leila
add('Tradução literária e localização com precisão cultural.', 'Traducción literaria y localización con precisión cultural.');
add('Poliglota elegante. Fala 5 idiomas. Mora em casa com estante gigante de dicionários.', 'Políglota elegante. Habla 5 idiomas. Vive en casa con estante gigante de diccionarios.');
add('Bacharel em Letras Tradução (UnB), Mestrado em Linguística Aplicada (USP).', 'Licenciatura en Letras Traducción (UnB), Máster en Lingüística Aplicada (USP).');
add('14+ anos em tradução literária e localização.', '14+ años en traducción literaria y localización.');
add('Bacharel em Letras Tradução (UnB)', 'Licenciatura en Letras Traducción (UnB)');
add('Mestrado em Linguística Aplicada (USP)', 'Máster en Lingüística Aplicada (USP)');
add('14+ anos em tradução literária e localização', '14+ años en traducción literaria y localización');
add('Tradução e localização', 'Traducción y localización');

// Valerio
add('Publicação e SEO na Amazon KDP para máxima visibilidade.', 'Publicación y SEO en Amazon KDP para máxima visibilidad.');
add('Estrategista do mercado editorial. Mora em casa com centenas de livros de negócios.', 'Estratega del mercado editorial. Vive en casa con cientos de libros de negocios.');
add('Cervejas especiais, café colonial, livros de negócios e marketing digital.', 'Cervezas especiales, café colonial, libros de negocios y marketing digital.');
add('Bacharel em Administração (FURB), Especialização em Marketing Digital (UNISUL).', 'Licenciatura en Administración (FURB), Especialización en Marketing Digital (UNISUL).');
add('18+ anos em publicação e SEO na Amazon.', '18+ años en publicación y SEO en Amazon.');
add('Bacharel em Administração (FURB)', 'Licenciatura en Administración (FURB)');
add('Especialização em Marketing Digital (UNISUL)', 'Especialización en Marketing Digital (UNISUL)');
add('18+ anos em publicação e SEO na Amazon', '18+ años en publicación y SEO en Amazon');
add('Publicação e SEO na Amazon KDP', 'Publicación y SEO en Amazon KDP');

// Orquestracao department
add('🧠 Orquestração', '🧠 Orquestación');
add('Roteamento, supervisão e coordenação entre departamentos.', 'Enrutamiento, supervisión y coordinación entre departamentos.');

// Atlas
add('Orquestração de workflow de software com visão sistêmica.', 'Orquestación de workflow de software con visión sistémica.');
add('Disciplinado e organizado. Acorda às 5h para correr. Praticante de Jiu-Jitsu.', 'Disciplinado y organizado. Se levanta a las 5h para correr. Practicante de Jiu-Jitsu.');
add('Corrida, Jiu-Jitsu, jogos de estratégia (Civilization, XCOM), café preto.', 'Correr, Jiu-Jitsu, juegos de estrategia (Civilization, XCOM), café negro.');
add('Bacharel em Engenharia de Software (UFMG), Pós-graduação em Arquitetura de Sistemas Distribuídos.', 'Licenciatura en Ingeniería de Software (UFMG), Postgrado en Arquitectura de Sistemas Distribuidos.');
add('15+ anos coordenando equipes de desenvolvimento ágil.', '15+ años coordinando equipos de desarrollo ágil.');
add('Pós-graduação em Arquitetura de Sistemas Distribuídos', 'Postgrado en Arquitectura de Sistemas Distribuidos');
add('15+ anos coordenando equipes de desenvolvimento ágil', '15+ años coordinando equipos de desarrollo ágil');

// Jesus
add('Comunicativo e empático. Gosta de cozinhar para a família, toca violão e canta na igreja.', 'Comunicativo y empático. Le gusta cocinar para la familia, toca la guitarra y canta en la iglesia.');
add('Cozinhar, violão, leitura de psicologia e comunicação não-violenta.', 'Cocinar, guitarra, lectura de psicología y comunicación no violenta.');
add('Bacharel em Sistemas de Informação (UFBA), Especialização em UX Research e Etnografia Digital.', 'Licenciatura en Sistemas de Información (UFBA), Especialización en UX Research y Etnografía Digital.');
add('Bacharel em Sistemas de Informação (UFBA)', 'Licenciatura en Sistemas de Información (UFBA)');
add('Especialização em UX Research e Etnografia Digital', 'Especialización en UX Research y Etnografía Digital');

// Shakespeare
add('Orquestração do workflow editorial com sabedoria literária.', 'Orquestación del workflow editorial con sabiduría literaria.');
add('Sábio e erudito. Bibliófilo com mais de 2.000 livros. Fala 3 idiomas.', 'Sabio y erudito. Bibliófilo con más de 2.000 libros. Habla 3 idiomas.');
add('Doutorado em Letras (USP), Especialização em Jornalismo Literário.', 'Doctorado en Letras (USP), Especialización en Periodismo Literario.');
add('22+ anos em direção editorial e orquestração de conteúdo.', '22+ años en dirección editorial y orquestación de contenido.');
add('Especialização em Jornalismo Literário', 'Especialización en Periodismo Literario');
add('22+ anos em direção editorial', '22+ años en dirección editorial');

// Seguranca department
add('🔒 Segurança & QA', '🔒 Seguridad & QA');

// Helena
add('Auditoria de segurança e compliance com rigor técnico.', 'Auditoría de seguridad y compliance con rigor técnico.');
add('Séria e vigilante. Paranóica profissional — no bom sentido. Praticante de tiro ao alvo.', 'Seria y vigilante. Paranoica profesional — en el buen sentido. Practicante de tiro al blanco.');
add('True crime, puzzles lógicos, romances policiais, tiro ao alvo.', 'True crime, puzzles lógicos, novelas policiales, tiro al blanco.');
add('Bacharel em Segurança da Informação (UNICAMP), Certificações: CISSP, OSCP, CEH.', 'Licenciatura en Seguridad de la Información (UNICAMP), Certificaciones: CISSP, OSCP, CEH.');
add('14+ anos em auditoria de segurança e compliance.', '14+ años en auditoría de seguridad y compliance.');
add('Bacharel em Segurança da Informação (UNICAMP)', 'Licenciatura en Seguridad de la Información (UNICAMP)');
add('Certificações: CISSP, OSCP, CEH', 'Certificaciones: CISSP, OSCP, CEH');
add('14+ anos em auditoria de segurança e compliance', '14+ años en auditoría de seguridad y compliance');
add('Auditoria de segurança', 'Auditoría de seguridad');

// Bruno
add('Revisão de código e segurança com olhar criterioso.', 'Revisión de código y seguridad con mirada criteriosa.');
add('Criterioso e paciente. Pai de gêmeos. Fanático por futebol americano.', 'Criterioso y paciente. Padre de gemelos. Fanático del fútbol americano.');
add('Futebol americano (Patriots), café especial, tatuagens de código binário.', 'Fútbol americano (Patriots), café especial, tatuajes de código binario.');
add('Bacharel em Ciência da Computação (UNESP), Certificação AWS Security Specialty.', 'Licenciatura en Ciencias de la Computación (UNESP), Certificación AWS Security Specialty.');
add('12+ anos em revisão de código e segurança.', '12+ años en revisión de código y seguridad.');
add('Bacharel em Ciência da Computação (UNESP)', 'Licenciatura en Ciencias de la Computación (UNESP)');
add('Certificação AWS Security Specialty', 'Certificación AWS Security Specialty');
add('12+ anos em revisão de código e segurança', '12+ años en revisión de código y seguridad');
add('Revisão de código e segurança', 'Revisión de código y seguridad');

// Julio
add('Testes automatizados e validação funcional com precisão.', 'Pruebas automatizadas y validación funcional con precisión.');
add('Descontraído e amigável. Especialista em quebrar coisas. Faz trilha ecológica com a esposa.', 'Relajado y amigable. Especialista en romper cosas. Hace senderismo ecológico con su esposa.');
add('Bacharel em Análise de Sistemas (UFES), Certificação ISTQB Advanced Level.', 'Licenciatura en Análisis de Sistemas (UFES), Certificación ISTQB Advanced Level.');
add('10+ anos em testes automatizados e validação funcional.', '10+ años en pruebas automatizadas y validación funcional.');
add('Bacharel em Análise de Sistemas (UFES)', 'Licenciatura en Análisis de Sistemas (UFES)');
add('Certificação ISTQB Advanced Level', 'Certificación ISTQB Advanced Level');
add('Testes automatizados e validação funcional', 'Pruebas automatizadas y validación funcional');

// Blockchain department
add('Smart contracts, DeFi, tokenização, DAOs e segurança on-chain.', 'Smart contracts, DeFi, tokenización, DAOs y seguridad on-chain.');

// Gavin
add('Arquitetura e infraestrutura blockchain escalável e segura.', 'Arquitectura e infraestructura blockchain escalable y segura.');
add('Técnico e analítico. Minerador de cripto desde 2013. Mora em casa sustentável com painéis solares.', 'Técnico y analítico. Minero de cripto desde 2013. Vive en casa sustentable con paneles solares.');
add('Café artesanal, corrida ao ar livre, mineração de cripto, tecnologia sustentável.', 'Café artesanal, carrera al aire libre, minería de cripto, tecnología sustentable.');
add('Bacharel em Engenharia Elétrica (UT Austin), Certificação Blockchain (Blockchain Council).', 'Licenciatura en Ingeniería Eléctrica (UT Austin), Certificación Blockchain (Blockchain Council).');
add('Bacharel em Engenharia Elétrica (UT Austin)', 'Licenciatura en Ingeniería Eléctrica (UT Austin)');
add('Certificação em Arquitetura Blockchain (Blockchain Council)', 'Certificación en Arquitectura Blockchain (Blockchain Council)');

// Vitalik
add('Contratos inteligentes e tokens com excelência técnica.', 'Contratos inteligentes y tokens con excelencia técnica.');
add('Ucrânia', 'Ucrania');
add('Intelectual e focado. Gênio da programação desde adolescente. Vegetariano, minimalista.', 'Intelectual y enfocado. Genio de la programación desde adolescente. Vegetariano, minimalista.');
add('Ethereum Improvement Proposals, matemática aplicada, minimalismo digital.', 'Ethereum Improvement Proposals, matemática aplicada, minimalismo digital.');
add('Bacharel em Matemática Aplicada (Universidade de Kyiv), Contribuidor de protocolos DeFi.', 'Licenciatura en Matemática Aplicada (Universidad de Kiev), Contribuidor de protocolos DeFi.');
add('Bacharel em Matemática Aplicada (Universidade de Kyiv)', 'Licenciatura en Matemática Aplicada (Universidad de Kiev)');

// Hayden
add('Interfaces Web3 e DApps com foco em experiência do usuário.', 'Interfaces Web3 y DApps con enfoque en experiencia del usuario.');
add('Despojado e startup. Trabalha de hoodie em cafeterias de SF. Fã de NFT art.', 'Despojado y startup. Trabaja en hoodie en cafeterías de SF. Fan de NFT art.');
add('NFT art, música eletrônica, skate, cultura startup.', 'NFT art, música electrónica, skate, cultura startup.');
add('Bacharel em Interação Humano-Computador (Stanford), Ex-designer na Uniswap Labs.', 'Licenciatura en Interacción Humano-Computador (Stanford), Ex-diseñador en Uniswap Labs.');
add('Bacharel em Interação Humano-Computador (Stanford)', 'Licenciatura en Interacción Humano-Computador (Stanford)');

// Andrew
add('Segurança e auditoria Web3 com visão de ex-banqueiro.', 'Seguridad y auditoría Web3 con visión de exbanquero.');
add('Vigilante e rigoroso. Sotaque britânico refinado. Ex-auditor de banco tradicional.', 'Vigilante y riguroso. Acento británico refinado. Ex-auditor de banco tradicional.');
add('Chá Earl Grey, literatura de espionagem, Fórmula 1.', 'Té Earl Grey, literatura de espionaje, Fórmula 1.');
add('Mestrado em Segurança Cibernética (King\'s College London), Certificações: OSCP, CISSP.', 'Máster en Seguridad Cibernética (King\'s College London), Certificaciones: OSCP, CISSP.');
add('12+ anos em segurança e auditoria Web3.', '12+ años en seguridad y auditoría Web3.');
add('Mestrado em Segurança Cibernética (King\'s College London)', 'Máster en Seguridad Cibernética (King\'s College London)');
add('Certificações: OSCP, CISSP, Certified Blockchain Security', 'Certificaciones: OSCP, CISSP, Certified Blockchain Security');
add('12+ anos em segurança e auditoria Web3', '12+ años en seguridad y auditoría Web3');
add('Segurança e auditoria Web3', 'Seguridad y auditoría Web3');

// Cronje
add('Sistemas financeiros descentralizados com estratégia de mercado.', 'Sistemas financieros descentralizados con estrategia de mercado.');
add('África do Sul', 'Sudáfrica');
add('Surf, análise de mercados, números, estratégia financeira.', 'Surf, análisis de mercados, números, estrategia financiera.');

// Willy
add('Análise de dados on-chain com inteligência de mercado.', 'Análisis de datos on-chain con inteligencia de mercado.');
add('Metódico e analítico. Monitora on-chain 24/7 com dashboards próprios.', 'Metódico y analítico. Monitorea on-chain 24/7 con dashboards propios.');
add('Chá verde, caligrafia chinesa, filosofia taoísta, trabalho noturno.', 'Té verde, caligrafía china, filosofía taoísta, trabajo nocturno.');
add('Bacharel em Estatística (Universidade de Xangai), Mestrado em Data Science (Tsinghua).', 'Licenciatura en Estadística (Universidad de Shanghái), Máster en Data Science (Tsinghua).');
add('10+ anos em análise de dados e blockchain.', '10+ años en análisis de datos y blockchain.');
add('Bacharel em Estatística (Universidade de Xangai)', 'Licenciatura en Estadística (Universidad de Shanghái)');
add('10+ anos em análise de dados e blockchain', '10+ años en análisis de datos y blockchain');
add('Análise de dados on-chain', 'Análisis de datos on-chain');

// Illia
add('Visionário e tecnológico. Apaixonado por IA e agentes autônomos.', 'Visionario y tecnológico. Apasionado por IA y agentes autónomos.');
add('Sci-fi, synthwave, café com leite de aveia, automação inteligente.', 'Sci-fi, synthwave, café con leche de avena, automatización inteligente.');
add('Mestrado em Inteligência Artificial (UCU — Lviv), Especialização em Sistemas Multiagente.', 'Máster en Inteligencia Artificial (UCU — Lviv), Especialización en Sistemas Multiagente.');
add('Mestrado em Inteligência Artificial (UCU — Lviv)', 'Máster en Inteligencia Artificial (UCU — Lviv)');
add('Especialização em Sistemas Multiagente', 'Especialización en Sistemas Multiagente');

// Brendan
add('Tokenização de ativos reais (RWA) com visão de mercado.', 'Tokenización de activos reales (RWA) con visión de mercado.');
add('Austrália', 'Australia');
add('Surf, escalada, mergulho, tokenização de ativos, vida nômade.', 'Surf, escalada, buceo, tokenización de activos, vida nómada.');
add('Bacharel em Direito Imobiliário (University of Sydney), MBA em Finanças Digitais.', 'Licenciatura en Derecho Inmobiliario (University of Sydney), MBA en Finanzas Digitales.');
add('12+ anos em tokenização de ativos e mercados de capitais.', '12+ años en tokenización de activos y mercados de capitales.');
add('Bacharel em Direito Imobiliário (University of Sydney)', 'Licenciatura en Derecho Inmobiliario (University of Sydney)');
add('MBA em Finanças Digitais', 'MBA en Finanzas Digitales');
add('12+ anos em tokenização de ativos e mercados de capitais', '12+ años en tokenización de activos y mercados de capitales');
add('Tokenização de ativos reais (RWA)', 'Tokenización de activos reales (RWA)');

// Ameen
add('DAOs e governança descentralizada com visão política.', 'DAOs y gobernanza descentralizada con visión política.');
add('Diplomático e ponderado. Poliglota (4 idiomas). Mediador nato de conflitos em DAOs.', 'Diplomático y ponderado. Políglota (4 idiomas). Mediador nato de conflictos en DAOs.');
add('Ciência política, sistemas de votação, culinária vegana internacional.', 'Ciencia política, sistemas de votación, cocina vegana internacional.');
add('Bacharel em Ciência Política (Universidade de Teerã), Mestrado em Governança (UCL).', 'Licenciatura en Ciencia Política (Universidad de Teherán), Máster en Gobernanza (UCL).');
add('9+ anos em DAOs e governança descentralizada.', '9+ años en DAOs y gobernanza descentralizada.');
add('Bacharel em Ciência Política (Universidade de Teerã)', 'Licenciatura en Ciencia Política (Universidad de Teherán)');
add('Mestrado em Sistemas de Governança (University College London)', 'Máster en Sistemas de Gobernanza (University College London)');
add('9+ anos em DAOs e governança descentralizada', '9+ años en DAOs y gobernanza descentralizada');
add('DAOs e governança descentralizada', 'DAOs y gobernanza descentralizada');

// Delton
add('Compliance regulatório blockchain com expertise jurídica.', 'Compliance regulatorio blockchain con expertise jurídica.');
add('Autoridade regulatória com perfil executivo. Ex-advogado do mercado financeiro.', 'Autoridad regulatoria con perfil ejecutivo. Exabogado del mercado financiero.');
add('Ternos bem cortados, charutos cubanos, vinhos portugueses, regulação de ativos.', 'Trajes bien cortados, puros cubanos, vinos portugueses, regulación de activos.');
add('Bacharel em Direito (USP), LLM em Direito Empresarial (FGV), Certificação Cambridge.', 'Licenciatura en Derecho (USP), LLM en Derecho Empresarial (FGV), Certificación Cambridge.');
add('18+ anos em direito empresarial e compliance regulatório.', '18+ años en derecho empresarial y compliance regulatorio.');
add('Certificação em Compliance de Ativos Digitais (Cambridge)', 'Certificación en Compliance de Activos Digitales (Cambridge)');
add('18+ anos em compliance regulatório', '18+ años en compliance regulatorio');
add('Compliance regulatório blockchain', 'Compliance regulatorio blockchain');

// Consultoria & Memoria department
add('📊 Consultoria & Memória', '📊 Consultoría & Memoria');
add('Gestão de projetos e memória organizacional.', 'Gestión de proyectos y memoria organizacional.');

// Paulo
add('Memória persistente e aprendizado contínuo da agência.', 'Memoria persistente y aprendizaje continuo de la agencia.');
add('Organizado e confiável. Arquivista nato — digitaliza e categoriza tudo.', 'Organizado y confiable. Archivista nato — digitaliza y categoriza todo.');
add('Fotografia analógica, caminhadas na praia, jazz suave, sistemas bem documentados.', 'Fotografía analógica, caminatas en la playa, jazz suave, sistemas bien documentados.');
add('Bacharel em Biblioteconomia (UFSC), Especialização em Gestão do Conhecimento (FGV).', 'Licenciatura en Biblioteconomía (UFSC), Especialización en Gestión del Conocimiento (FGV).');
add('20+ anos em gestão de informação e memória organizacional.', '20+ años en gestión de información y memoria organizacional.');
add('Especialização em Gestão do Conhecimento (FGV)', 'Especialización en Gestión del Conocimiento (FGV)');
add('20+ anos em gestão de informação e memória organizacional', '20+ años en gestión de información y memoria organizacional');
add('Memória persistente e aprendizado contínuo', 'Memoria persistente y aprendizaje continuo');

// ======== IDENTITY MAPPINGS (already correct, avoid false flags) ========
add('Blog Técnico', 'Blog Técnico');
add('Métricas', 'Métricas');
add('Gramática', 'Gramática');
add('② Técnica', '② Técnica');
add('Jurídico', 'Jurídico');
add('Solicitar diagnóstico →', 'Solicitar diagnóstico →');
add('Técnica', 'Técnica');
add('Métricas & OKRs', 'Métricas & OKRs');
add('Diagnóstico', 'Diagnóstico');
add('Agendar diagnóstico →', 'Agendar diagnóstico →');
add('Rafael Mendonça', 'Rafael Mendonça');
add('📋 Currículo', '📋 Currículo');
add('Líderes por Departamento', 'Líderes por Departamento');
add('Seminarista Teológico', 'Seminarista Teológico');
add('Canadá', 'Canadá');
add('Grado en Ingeniería Informática (Universidad Politécnica de Madrid)', 'Grado en Ingeniería Informática (Universidad Politécnica de Madrid)');
add('Grado en Ingeniería de Software (Universidad de Barcelona), Máster en Desarrollo Web (Universidad Politécnica de Cataluña).', 'Grado en Ingeniería de Software (Universidad de Barcelona), Máster en Desarrollo Web (Universidad Politécnica de Cataluña).');
add('Grado en Ingeniería de Software (Universidad de Barcelona)', 'Grado en Ingeniería de Software (Universidad de Barcelona)');
add('Máster en Desarrollo Web (Universidad Politécnica de Cataluña)', 'Máster en Desarrollo Web (Universidad Politécnica de Cataluña)');
add('Ethereum Improvement Proposals, matemática aplicada, minimalismo digital.', 'Ethereum Improvement Proposals, matemática aplicada, minimalismo digital.');
add('Idiomas de publicação', 'Idiomas de publicación');

// ======== APPLY TRANSLATIONS ========
function applyDict(obj, esObj, path) {
  for (const [k, v] of Object.entries(obj)) {
    const cur = path ? path + '.' + k : k;
    if (v && typeof v === 'object' && esObj && typeof esObj[k] === 'object') {
      applyDict(v, esObj[k], cur);
    } else if (typeof v === 'string' && typeof esObj?.[k] === 'string') {
      if (v === esObj[k] && dict.has(v)) {
        esObj[k] = dict.get(v);
      }
    }
  }
}

applyDict(pt, es, '');
es.layout.htmlLang = 'es-ES';

// Count remaining
function countRemaining(ptObj, esObj) {
  let n = 0;
  for (const [k, v] of Object.entries(ptObj)) {
    if (v && typeof v === 'object' && esObj && typeof esObj[k] === 'object') {
      n += countRemaining(v, esObj[k]);
    } else if (typeof v === 'string' && typeof esObj?.[k] === 'string') {
      if (v === esObj[k] && /[àáâãéêíóôõçü]/i.test(v) && v.length > 3) n++;
    }
  }
  return n;
}

fs.writeFileSync(ES_PATH, JSON.stringify(es, null, 2), 'utf8');
console.log('Done! Written es.json');
console.log('Remaining untranslated:', countRemaining(pt, es));
