package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Column;
import java.io.Serializable;
import javax.persistence.*;

/**
 * An Soufamille
 */
@Entity
@Table(name = "Soufamille")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class SousFamille implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(length = 50)
    private String csfam;

    @Column(name = "libsfam")
    private String libsfam;

    @Column(name = "cfam")
    private String cfam;

    @Column(name = "cptimmo")
    private String cptimmo;

    @Column(name = "cptamort")
    private String cptamort;

    @Column(name = "cptdot")
    private String cptdot;

    @Column(name = "intitcpt")
    private String intitcpt;
    

    @Column(name = "taux")
    private Float taux;

    @Column(name = "duree")
    private Integer duree;

     @Column(name = "item")
    private String item;

     @Column(name = "inventaire")
    private Boolean inventaire;

    @Column(name = "taux_val_loc_patente")
    private Float tauxValLocPatente;

    @Column(name = "taux_val_loc_impot")
    private Float tauxValLocImpot;

    @Column(name = "taux_impot")
    private Float tauxImpot;

    @Column(name = "taux_patente")
    private Float tauxPatente;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getCsfam() {
        return csfam;
    }

    public void setCsfam(String csfam) {
        this.csfam = csfam;
    }

    public String getLibsfam() {
        return libsfam;
    }

    public void setLibsfam(String libsfam) {
        this.libsfam = libsfam;
    }

    public String getCfam() {
        return cfam;
    }

    public void setCfam(String cfam) {
        this.cfam = cfam;
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

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Boolean getInventaire() {
        return inventaire;
    }

    public void setInventaire(Boolean inventaire) {
        this.inventaire = inventaire;
    }

    public Float getTauxValLocPatente() {
        return tauxValLocPatente;
    }

    public void setTauxValLocPatente(Float tauxValLocPatente) {
        this.tauxValLocPatente = tauxValLocPatente;
    }

    public Float getTauxValLocImpot() {
        return tauxValLocImpot;
    }

    public void setTauxValLocImpot(Float tauxValLocImpot) {
        this.tauxValLocImpot = tauxValLocImpot;
    }

    public Float getTauxImpot() {
        return tauxImpot;
    }

    public void setTauxImpot(Float tauxImpot) {
        this.tauxImpot = tauxImpot;
    }

    public Float getTauxPatente() {
        return tauxPatente;
    }

    public void setTauxPatente(Float tauxPatente) {
        this.tauxPatente = tauxPatente;
    }

    @Override
    public String toString() {
        return "SousFamille [cfam=" + cfam + ", cptamort=" + cptamort + ", cptdot=" + cptdot + ", cptimmo=" + cptimmo
                + ", csfam=" + csfam + ", duree=" + duree + ", inventaire=" + inventaire + ", item=" + item
                + ", libsfam=" + libsfam + ", taux=" + taux + ", tauxImpot=" + tauxImpot + ", tauxPatente="
                + tauxPatente + ", tauxValLocImpot=" + tauxValLocImpot + ", tauxValLocPatente=" + tauxValLocPatente
                + "]";
    }
}
