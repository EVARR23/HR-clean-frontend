         function calcular(){
                  saldoDeSalario();
                  avisoPrevioIndenizado();
                  feriasVencidas();
                  feriasProporcionais();
                  decimoTerceiroProporcional();
                  multaFgts();
                  total();
         }

         function saldoDeSalario(){

              let salarioBruto = document.getElementById("salarioBruto").value;
              let dataDeDemissao = document.getElementById("dataDeDemissao").value;
                  var dtDemissao = new Date(dataDeDemissao);

              let saldoDeSalario = salarioBruto / 30 * (dtDemissao.getDate() + 1);

              document.getElementById("saldoDeSalario").innerText = saldoDeSalario;

               return saldoDeSalario;
         }

          function avisoPrevioIndenizado() {
                             let salarioBruto = document.getElementById("salarioBruto").value;
                             let dataDeContratacao = document.getElementById("dataDeContratacao").value;
                             let dataDeDemissao = document.getElementById("dataDeDemissao").value;

                             var dtDemissao = new Date(dataDeDemissao);
                             var dtContratacao = new Date(dataDeContratacao);

                             var intervaloEmMilissegundos = dtDemissao  - dtContratacao;
                             intervaloEmDias = intervaloEmMilissegundos / (1000 * 60 * 60 * 24);

                             intervaloEmAnos = Math.floor(intervaloEmDias / 365);

                             var diasDeAvisoPrevio = 30 + (intervaloEmAnos * 3);

                             let avisoPrevioIndenizado = salarioBruto / 30 * diasDeAvisoPrevio;

                             document.getElementById("avisoPrevioIndenizado").innerText = avisoPrevioIndenizado;

                             return avisoPrevioIndenizado;
                 }


                 function feriasVencidas(){

                          let salarioBruto = document.getElementById("salarioBruto").value;

                          let feriasVencidas = salarioBruto + salarioBruto / 3;

                          document.getElementById("feriasVencidas"). innerText = feriasVencidas;

                           return feriasVencidas;


                 }

                 function feriasProporcionais(){

                  let salarioBruto = document.getElementById("salarioBruto").value;
                   let mesesTrabalhados = document.getElementById("mesesTrabalhados").value;

                    let feriasProporcionais = salarioBruto + mesesTrabalhados / 3;

                       document.getElementById("feriasProporcionais"). innerText = feriasProporcionais;

                       return feriasProporcionais;

                 }

                 function decimoTerceiroProporcional() {

                                       let salarioBruto = document.getElementById("salarioBruto").value;
                                       let mesesTrabalhados = document.getElementById("mesesTrabalhados").value;

                                       let decimoTerceiroProporcional = salarioBruto / 12 * mesesTrabalhados;


                                        document.getElementById("decimoTerceiroProporcional").innerText = decimoTerceiroProporcional;

                                        return decimoTerceiroProporcional;
                         }

                 function multaFgts() {

                    let saldoFgts = document.getElementById("saldoFgts").value;

                    let multaFgts = saldoFgts * 0.2;

                    document.getElementById("multaFgts").innerText = multaFgts;

                    return multaFgts;
                 }


                   function total() {
                            var total = saldoDeSalario() + avisoPrevioIndenizado() + feriasVencidas() + feriasProporcionais() + decimoTerceiroProporcional() + multaFgts() ;
                            document.getElementById("total").innerText = total;
                         }