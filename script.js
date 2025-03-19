
     function calcular() {
         saldoDeSalario();
         avisoPrevioIndenizado();
         ferias();
         total();
         decimoTerceiroProporcional();
     }


     function saldoDeSalario() {

                let salarioBruto = document.getElementById("salarioBruto").value;
                let dataDeDemissao = document.getElementById("dataDeDemissao").value;
                var dtDemissao = new Date(dataDeDemissao);

                let saldoSalario = salarioBruto / 30 * (dtDemissao.getDate() + 1);

                document.getElementById("saldoSalario").innerText = saldoSalario;

                return saldoSalario;
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

        function total() {
           var total = saldoDeSalario() + avisoPrevioIndenizado() + ferias() ;
           document.getElementById("total").innerText = total;
        }


        function ferias() {

          let salarioBruto = document.getElementById("salarioBruto").value;
          let diasDeFerias = document.getElementById("diasDeFerias").value;

          let ferias = salarioBruto / 30 * diasDeFerias + salarioBruto /30 * diasDeFerias * 1/3;

         document.getElementById("ferias").innerText = ferias;


             return ferias;

        }

        function decimoTerceiroProporcional() {

          let salarioBruto = document.getElementById("salarioBruto").value;
          let mesesTrabalhados = document.getElementById("mesesTrabalhados").value;

          let decimoTerceiroProporcional = salarioBruto / 12 * mesesTrabalhados;


            document.getElementById("decimoTerceiroProporcional").innerText = decimoTerceiroProporcional;

            return decimoTerceiroProporcional;
        }

