package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;

import java.io.Serializable;
import java.sql.Date;

/**
 * PrepaImmo.
 */
@Entity
@Table(name = "T_PREPAIMMO")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PrepaImmo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long numero;

    @Column(name = "libimmo")
    private String libimmo;

    @Column(name = "genre")
    private String genre;

    @Column(name = "marque")
    private String marque;

    @Column(name = "type")
    private String type;

    @Column(name = "reference")
    private String reference;

    @Column(name = "nbre")
    private Integer nbre;

    @Column(name = "fourn")
    private String fourn;

     @Column(name = "numfact")
    private String numfact;

     @Column(name = "num_bon_comm")
    private String numBonComm;

     @Column(name = "date_bon_comm")
    private Date dateBonComm;

     @Column(name = "bon_liv")
    private String bonLiv;

    @Column(name = "date_bon_liv")
    private Date dateBonLiv;

    @Column(name = "dfact")
    private Date dfact;

    @Column(name = "valacq")
    private Float valacq;

    @Column(name = "mnttaxe")
    private Float mnttaxe;

    @Column(name = "montreeval")
    private Float montreeval;

    @Column(name = "valacq2")
    private Float valacq2;

    @Column(name = "mnttaxe2")
    private Float mnttaxe2;

    @Column(name = "ddac")
    private Date ddac;

    @Column(name = "dms")
    private Date dms;

    @Column(name = "age")
    private Integer age;

    @Column(name = "cdir")
    private String cdir;

    @Column(name = "cserv")
    private String cserv;

    @Column(name = "local")
    private String local;

    @Column(name = "csfam")
    private String csfam;

    @Column(name = "cpttva")
    private String cpttva;

    @Column(name = "cptimmo")
    private String cptimmo;

    @Column(name = "cptamort")
    private String cptamort;

    @Column(name = "cptdot")
    private String cptdot;

     @Column(name = "taux")
    private Float taux;

    @Column(name = "taux2")
    private Float taux2;

    @Column(name = "duree2")
    private Float duree2;

    @Column(name = "cpte_benef")
    private String cpteBenef;

    @Column(name = "immoamort")
    private Boolean  immoamort;

    @Column(name = "regul")
    private Boolean regul;

    @Column(name = "reeval")
    private Boolean reeval;

    @Column(name = "anccodif")
    private String anccodif;

    @Column(name = "fiscale")
    private Boolean fiscale;

    @Column(name = "contrat")
    private Boolean contrat;

     @Column(name = "taxe")
    private Boolean taxe;

    @Column(name = "anc_compte")
    private String ancCompte;

    @Column(name = "operateur_saisi")
    private String operateurSaisi;

     @Column(name = "etat")
    private String etat;

     @Column(name = "motif_rejet")
    private String motifRejet;

    @Column(name = "nummodif")
    private Integer nummodif;

    @Column(name = "item")
    private String item;

    @Column(name = "comptabilise")
    private String comptabilise;

     @Column(name = ("immo_rattache"))
    private Integer ImmoRattache;

    @Column(name = "numinv")
    private String numinv;
    
    @Column(name = "codevalo")
    private String codevalo;

    @Column(name = "ancienlocal")
    private String ancienlocal;

    @Column(name = "num_avance")
    private Integer numAvance;

     @Column(name = "blocnotes")
    private String blocnotes;

     @Column(name = "ssma_time_stamp")
    private Date SSMA_TimeStamp;

    @Column(name = "num_subv")
    private Integer numSubv;

     @Column(name = "taux_subv")
    private Integer tauxSubv;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public String getLibimmo() {
        return libimmo;
    }

    public void setLibimmo(String libimmo) {
        this.libimmo = libimmo;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Integer getNbre() {
        return nbre;
    }

    public void setNbre(Integer nbre) {
        this.nbre = nbre;
    }

    public String getFourn() {
        return fourn;
    }

    public void setFourn(String fourn) {
        this.fourn = fourn;
    }

    public String getNumfact() {
        return numfact;
    }

    public void setNumfact(String numfact) {
        this.numfact = numfact;
    }

    public String getNumBonComm() {
        return numBonComm;
    }

    public void setNumBonComm(String numBonComm) {
        this.numBonComm = numBonComm;
    }

    public Date getDateBonComm() {
        return dateBonComm;
    }

    public void setDateBonComm(Date dateBonComm) {
        this.dateBonComm = dateBonComm;
    }

    public String getBonLiv() {
        return bonLiv;
    }

    public void setBonLiv(String bonLiv) {
        this.bonLiv = bonLiv;
    }

    public Date getDateBonLiv() {
        return dateBonLiv;
    }

    public void setDateBonLiv(Date dateBonLiv) {
        this.dateBonLiv = dateBonLiv;
    }

    public Date getDfact() {
        return dfact;
    }

    public void setDfact(Date dfact) {
        this.dfact = dfact;
    }

    public Float getValacq() {
        return valacq;
    }

    public void setValacq(Float valacq) {
        this.valacq = valacq;
    }

    public Float getMnttaxe() {
        return mnttaxe;
    }

    public void setMnttaxe(Float mnttaxe) {
        this.mnttaxe = mnttaxe;
    }

    public Float getMontreeval() {
        return montreeval;
    }

    public void setMontreeval(Float montreeval) {
        this.montreeval = montreeval;
    }

    public Float getValacq2() {
        return valacq2;
    }

    public void setValacq2(Float valacq2) {
        this.valacq2 = valacq2;
    }

    public Float getMnttaxe2() {
        return mnttaxe2;
    }

    public void setMnttaxe2(Float mnttaxe2) {
        this.mnttaxe2 = mnttaxe2;
    }

    public Date getDdac() {
        return ddac;
    }

    public void setDdac(Date ddac) {
        this.ddac = ddac;
    }

    public Date getDms() {
        return dms;
    }

    public void setDms(Date dms) {
        this.dms = dms;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCdir() {
        return cdir;
    }

    public void setCdir(String cdir) {
        this.cdir = cdir;
    }

    public String getCserv() {
        return cserv;
    }

    public void setCserv(String cserv) {
        this.cserv = cserv;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getCsfam() {
        return csfam;
    }

    public void setCsfam(String csfam) {
        this.csfam = csfam;
    }

    public String getCpttva() {
        return cpttva;
    }

    public void setCpttva(String cpttva) {
        this.cpttva = cpttva;
    }

    public String getCptimmo() {
        return cptimmo;
    }

    public void setCptimmo(String cptimmo) {
        this.cptimmo = cptimmo;
    }

    public String getCptamort() {
        return cptamort;
    }

    public void setCptamort(String cptamort) {
        this.cptamort = cptamort;
    }

    public String getCptdot() {
        return cptdot;
    }

    public void setCptdot(String cptdot) {
        this.cptdot = cptdot;
    }

    public Float getTaux() {
        return taux;
    }

    public void setTaux(Float taux) {
        this.taux = taux;
    }

    public Float getTaux2() {
        return taux2;
    }

    public void setTaux2(Float taux2) {
        this.taux2 = taux2;
    }

    public Float getDuree2() {
        return duree2;
    }

    public void setDuree2(Float duree2) {
        this.duree2 = duree2;
    }

    public String getCpteBenef() {
        return cpteBenef;
    }

    public void setCpteBenef(String cpteBenef) {
        this.cpteBenef = cpteBenef;
    }

    public Boolean isImmoamort() {
        return immoamort;
    }

    public void setImmoamort(Boolean immoamort) {
        this.immoamort = immoamort;
    }

    public Boolean isRegul() {
        return regul;
    }

    public void setRegul(Boolean regul) {
        this.regul = regul;
    }

    public Boolean isReeval() {
        return reeval;
    }

    public void setReeval(Boolean reeval) {
        this.reeval = reeval;
    }

    public String getAnccodif() {
        return anccodif;
    }

    public void setAnccodif(String anccodif) {
        this.anccodif = anccodif;
    }

    public Boolean isFiscale() {
        return fiscale;
    }

    public void setFiscale(Boolean fiscale) {
        this.fiscale = fiscale;
    }

    public Boolean isContrat() {
        return contrat;
    }

    public void setContrat(Boolean contrat) {
        this.contrat = contrat;
    }

    public Boolean isTaxe() {
        return taxe;
    }

    public void setTaxe(Boolean taxe) {
        this.taxe = taxe;
    }

    public String getAncCompte() {
        return ancCompte;
    }

    public void setAncCompte(String ancCompte) {
        this.ancCompte = ancCompte;
    }

    public String getOperateurSaisi() {
        return operateurSaisi;
    }

    public void setOperateurSaisi(String operateurSaisi) {
        this.operateurSaisi = operateurSaisi;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getMotifRejet() {
        return motifRejet;
    }

    public void setMotifRejet(String motifRejet) {
        this.motifRejet = motifRejet;
    }

    public Integer getNummodif() {
        return nummodif;
    }

    public void setNummodif(Integer nummodif) {
        this.nummodif = nummodif;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getComptabilise() {
        return comptabilise;
    }

    public void setComptabilise(String comptabilise) {
        this.comptabilise = comptabilise;
    }

    public Integer getImmoRattache() {
        return ImmoRattache;
    }

    public void setImmoRattache(Integer immoRattache) {
        ImmoRattache = immoRattache;
    }

    public String getNuminv() {
        return numinv;
    }

    public void setNuminv(String numinv) {
        this.numinv = numinv;
    }

    public String getCodevalo() {
        return codevalo;
    }

    public void setCodevalo(String codevalo) {
        this.codevalo = codevalo;
    }

    public String getAncienlocal() {
        return ancienlocal;
    }

    public void setAncienlocal(String ancienlocal) {
        this.ancienlocal = ancienlocal;
    }

    public Integer getNumAvance() {
        return numAvance;
    }

    public void setNumAvance(Integer numAvance) {
        this.numAvance = numAvance;
    }

    public String getBlocnotes() {
        return blocnotes;
    }

    public void setBlocnotes(String blocnotes) {
        this.blocnotes = blocnotes;
    }

    public Date getSSMA_TimeStamp() {
        return SSMA_TimeStamp;
    }

    public void setSSMA_TimeStamp(Date sSMA_TimeStamp) {
        SSMA_TimeStamp = sSMA_TimeStamp;
    }

    public Integer getNumSubv() {
        return numSubv;
    }

    public void setNumSubv(Integer numSubv) {
        this.numSubv = numSubv;
    }

    public Integer getTauxSubv() {
        return tauxSubv;
    }

    public void setTauxSubv(Integer tauxSubv) {
        this.tauxSubv = tauxSubv;
    }

    @Override
    public String toString() {
        return "PrepaImmo [ImmoRattache=" + ImmoRattache + ", SSMA_TimeStamp=" + SSMA_TimeStamp + ", age=" + age
                + ", ancCompte=" + ancCompte + ", anccodif=" + anccodif + ", ancienlocal=" + ancienlocal
                + ", blocnotes=" + blocnotes + ", bonLiv=" + bonLiv + ", cdir=" + cdir + ", codevalo=" + codevalo
                + ", comptabilise=" + comptabilise + ", contrat=" + contrat + ", cptamort=" + cptamort + ", cptdot="
                + cptdot + ", cpteBenef=" + cpteBenef + ", cptimmo=" + cptimmo + ", cpttva=" + cpttva + ", cserv="
                + cserv + ", csfam=" + csfam + ", dateBonComm=" + dateBonComm + ", dateBonLiv=" + dateBonLiv + ", ddac="
                + ddac + ", dfact=" + dfact + ", dms=" + dms + ", duree2=" + duree2 + ", etat=" + etat + ", fiscale="
                + fiscale + ", fourn=" + fourn + ", genre=" + genre + ", immoamort=" + immoamort + ", item=" + item
                + ", libimmo=" + libimmo + ", local=" + local + ", marque=" + marque + ", mnttaxe=" + mnttaxe
                + ", mnttaxe2=" + mnttaxe2 + ", montreeval=" + montreeval + ", motifRejet=" + motifRejet + ", nbre="
                + nbre + ", numAvance=" + numAvance + ", numBonComm=" + numBonComm + ", numSubv=" + numSubv
                + ", numero=" + numero + ", numfact=" + numfact + ", numinv=" + numinv + ", nummodif=" + nummodif
                + ", operateurSaisi=" + operateurSaisi + ", reeval=" + reeval + ", reference=" + reference + ", regul="
                + regul + ", taux=" + taux + ", taux2=" + taux2 + ", tauxSubv=" + tauxSubv + ", taxe=" + taxe
                + ", type=" + type + ", valacq=" + valacq + ", valacq2=" + valacq2 + "]";
    }

}





    

















    





    














    






    























    

    

