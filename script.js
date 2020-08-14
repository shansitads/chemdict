
var jsfile = {
    "title": "IUPAC Compendium of Chemical Terminology",
    "publisher": "International Union of Pure and Applied Chemistry",
    "isbn": "978-0865426849",
    "doi": "10.1351/goldbook",
    "accessdate": "2019-07-01T11:05:34-04:00",
    "stats": {
        "total": 7038,
        "current": 6465,
        "obsolete": 147,
        "replaced": 426
    },
    "entries": {
        "1": {
            "code": "A00001",
            "term": "α-addition",
            "status": "current",
            "doi": "10.1351/goldbook.A00001",
            "version": "2.3.3",
            "lastupdated": "2014-02-24",
            "newcode": null,
            "url": "https://sds.coas.unf.edu/gb/terms/view/A00001",
            "definition": "A chemical reaction resulting in a single reaction product from two or three reacting chemical species, with formation of two new chemical bonds to the same atom in one of the reactant molecular entities. The synonymous term 1/1/addition is also used. For example: [image: α-addition reaction] (This particular example can also be viewed as an insertion reaction). In inorganic chemistry such α-addition reactions, generally to a metallic central atom, are known as 'oxidative additions'. α-Addition is the reverse of α-elimination or 1/1/elimination.",
            "identifiers": {
                "doi": "10.1351/goldbook.A00001",
                "code": "A00001",
                "term": "α-addition (alpha-addition)",
                "synonym": ["1/1/addition"]
            },
            "related": [
                "https://sds.coas.unf.edu/gb/terms/view/A00132",
                "https://sds.coas.unf.edu/gb/terms/view/B00697",
                "https://sds.coas.unf.edu/gb/terms/view/C00930",
                "https://sds.coas.unf.edu/gb/terms/view/C01033",
                "https://sds.coas.unf.edu/gb/terms/view/E02038",
                "https://sds.coas.unf.edu/gb/terms/view/I03058",
                "https://sds.coas.unf.edu/gb/terms/view/M03986",
                "https://sds.coas.unf.edu/gb/terms/view/A00007",
                "https://sds.coas.unf.edu/gb/terms/view/A00133"
            ]
        },
        "2": {
            "code": "R00002",
            "term": "α- (β-, γ-) ray spectrometer",
            "status": "current",
            "doi": "10.1351/goldbook.R00002",
            "version": "2.3.3",
            "lastupdated": "2014-02-24",
            "newcode": null,
            "url": "https://sds.coas.unf.edu/gb/terms/view/R00002",
            "definition": "A measuring assembly incorporating a radiation detector and a pulse amplitude, used for determining the energy spectrum of α (β, γ) radiation.",
            "identifiers": {
                "doi": "10.1351/goldbook.R00002",
                "code": "R00002",
                "term": "α- (β-, γ-) ray spectrometer"
            },
            "related": [
                "https://sds.coas.unf.edu/gb/terms/view/P04945",
                "https://sds.coas.unf.edu/gb/terms/view/R05048",
                "https://sds.coas.unf.edu/gb/terms/view/R05054"
            ]
        },
        "7035": {
            "code": "PT07642",
            "term": "peptization",
            "status": "current",
            "doi": "10.1351/goldbook.PT07642",
            "version": "2.3.3",
            "lastupdated": "2014-02-24",
            "newcode": null,
            "url": "https://sds.coas.unf.edu/gb/terms/view/PT07642",
            "definition": "Reversal of coagulation or flocculation, i.e., the dispersion of agglomerates to form a colloidally stablesuspension or emulsion.",
            "identifiers": {
                "doi": "10.1351/goldbook.PT07642",
                "code": "PT07642",
                "term": "peptization"
            },
            "related": [
                "https://sds.coas.unf.edu/gb/terms/view/A00182",
                "https://sds.coas.unf.edu/gb/terms/view/C01176",
                "https://sds.coas.unf.edu/gb/terms/view/E02065",
                "https://sds.coas.unf.edu/gb/terms/view/S06198",
                "https://sds.coas.unf.edu/gb/terms/view/D01555"
            ]
        }
    }
}

function searchClicked() {
  var outputterm = document.getElementById('jsterm');
  var outputdef = document.getElementById('jsdef');
  outputterm.innerHTML = jsfile.entries[2].term;
  outputdef.innerHTML = jsfile.entries[2].definition;
}
