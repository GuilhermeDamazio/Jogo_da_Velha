/*Criei essa função para colocar uma música de ambientação no game. Ela roda em looping infinito, mas o usuário pode pausar ela.*/ 

function Musica() {
    return(
        <>
        
         <div className="controle">
             <audio autoplay="autoplay" controls="controls" loop>
                <source src="src/musica.mp4" type="audio/mp4" />
                
                     </audio>
         </div>
        </>
    )
} export default Musica;