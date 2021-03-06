// Este script é responsável por criar funções bem verbosas para transmitir informação ao usuário

// -----------------------
// FUNÇÕES VERBOSAS

// Mostrar resultados da calibração
function mostrarResultados(){
    var str = 'Clique T para trocar entre o ambiente 2D e 3D. <br/>';
    str = str + 'Use WASD para mover a posição da câmera. <br/>';
    str = str + 'Use SETAS para mover o ângulo da câmera. <br/>';

    // Fx, Fy e Fz
    var strList = ['Fx','Fy','Fz'];
    for(var j=0; j<3; j++){
        str = str + strList[j] + ': (';
        str = str + arredondar(pontosDeFuga[j].x,3) + ', ' + arredondar(pontosDeFuga[j].y,3);
        str = str + '), <br/>';
    }

    // Camera
    str = str + 'C: (';
    str = str + arredondar(C.x,3) + ', ';
    str = str + arredondar(C.y,3) + ', ';
    str = str + arredondar(C.z,3) + ') <br/>';

    // Base XYZ
    str = str + 'baseXYZ: <br/>'
    for(var i=0; i<3; i++){
        str = str + '[' + arredondar(baseXYZ.elements[3*i],3);
        for(var j=1; j<3; j++){
            str = str + ', ' + arredondar(baseXYZ.elements[3*i+j],3);
        }
        str = str + '] <br/>';
    }

    document.getElementById('output').innerHTML = str;
}
// -----------------------