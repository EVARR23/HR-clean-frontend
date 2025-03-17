
     function calcular() {
            saldoDeSalario();
            avisoPrevioIndenizado();
            ferias();

            total();
     }

     function saldoDeSalario() {

                let salarioBruto = document.getElementById("salarioBruto").value;
                let dataDeDemissao = document.getElementById("dataDeDemissao").value;
                var dtDemissao = new Date(dataDeDemissao);
                alert((dtDemissao.getDate() + 1));

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
           var total = saldoDeSalario() + avisoPrevioIndenizado();
           document.getElementById("total").innerText = total;
        }




