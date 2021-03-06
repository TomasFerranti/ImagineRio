// Este script é responsável por atualizar todos os elementos do HTML

// -----------------------
// FUNÇÃO ATUALIZAR

// Quando ela é chamada, atualiza todos os elementos do HTML
function attElementosHTML(){

    // Botões guia calibração
    var textoCorreto = (texto) => (texto ? ' ✓' : '');
    document.getElementById('btGuiaX').innerHTML=('Eixo X' + textoCorreto(lastButton == 'X'));
    document.getElementById('btGuiaY').innerHTML=('Eixo Y' + textoCorreto(lastButton == 'Y'));
    document.getElementById('btGuiaZ').innerHTML=('Eixo Z' + textoCorreto(lastButton == 'Z'));        
    document.getElementById('btExtrair').innerHTML=('Extrair' + textoCorreto(lastButton == 'extrair'));      

    // Botões textura
    document.getElementById('btNovoPlano').innerHTML=('Novo Plano' + textoCorreto(lastButton == 'novoPlano'));
    document.getElementById('btPlanoYZ').innerHTML=('Plano YZ' + textoCorreto(lastButtonTex == 'YZ'));
    document.getElementById('btPlanoXZ').innerHTML=('Plano XZ' + textoCorreto(lastButtonTex == 'XZ'));
    document.getElementById('btPlanoXY').innerHTML=('Plano XY' + textoCorreto(lastButtonTex == 'XY'));

    // Botões de novos planos
    for(nome in tiposPlano){
        tiposPlano[nome]['objeto'].innerHTML=('Plano ' + nome + textoCorreto(lastButtonTex == nome));
    }

    // Imagem
    imgCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
    try{
    imgCtx.drawImage(imgImagem, 0, 0, imgImagem.width, imgImagem.height,    
                                0, 0, imgCanvas.width, imgCanvas.height); 
    } catch(e){}
    
    // Pontos dos eixos
    for (var j = 0; j < 3; j++){        
        for (var i = 0; i < pontosGuia[j].length; i++) {
            ponto(pontosGuia[j][i].x, pontosGuia[j][i].y, 3,'black');
        }
    }
    
    // Linhas
    var corLinha = ['red','green','blue'];
    for (var j = 0; j < 3; j++){        
        var tam = pontosGuia[j].length;
        for (var i = 0; i < (tam-tam%2)/2; i++) {
            reta(pontosGuia[j][2*i],pontosGuia[j][2*i+1],corLinha[j]);
        }
    }

    // Pontos do novo plano atual
    for (var i = 0; i < planoSeg.length; i++){
        ponto(planoSeg[i].x, planoSeg[i].y, 3, 'violet');
    }

    // Pontos e Segmentos dos novos planos já adicionados
    for (nomePlano in tiposPlano){
        if(['XY','YZ','XZ'].includes(nomePlano)){
            continue;
        }
        var p1 = tiposPlano[nomePlano]['planoSeg'][0];
        var p2 = tiposPlano[nomePlano]['planoSeg'][1];
        ponto(p1.x, p1.y, 3, 'violet');
        ponto(p2.x, p2.y, 3, 'violet');
        reta(p1, p2, 'violet');
    }

    // Pontos da textura
    for (var i = 0; i < pontosExtrair.length; i++) {
        ponto(pontosExtrair[i].x, pontosExtrair[i].y, 5,'purple');
    }
    
    // Planos
    for (var j = 0; j < planos.length; j++) {
        for (var i = 0; i < 4; i++) {
            ponto(planos[j].v[i].x, planos[j].v[i].y, 3,'orange');
        }
        for (var i = 0; i < 3; i++) {
            reta(planos[j].v[i],planos[j].v[i+1],'yellow');
        }
        reta(planos[j].v[3],planos[j].v[0],'yellow');
    }

    // Ortocentro
	ponto(C.x,C.y,10,'pink');
}
// -----------------------