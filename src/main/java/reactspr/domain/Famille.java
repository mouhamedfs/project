package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.io.Serializable;
import javax.persistence.*;

/**
 * An famille
 */
@Entity
@Table(name = "Famille")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Famille implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private String cfam;

    @Column(name = "libfam")
    private String libfam;

    @Column(name = "cptcolfour")
    private String cptcolfour;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getCfam() {
        return cfam;
    }

    public void setCfam(String cfam) {
        this.cfam = cfam;
    }

    public String getLibfam() {
        return libfam;
    }

    public void setLibfam(String libfam) {
        this.libfam = libfam;
    }

    public String getCptcolfour() {
        return cptcolfour;
    }

    public void setCptcolfour(String cptcolfour) {
        this.cptcolfour = cptcolfour;
    }

    @Override
    public String toString() {
        return "Famille [cfam=" + cfam + ", cptcolfour=" + cptcolfour + ", libfam=" + libfam + "]";
    }

    


    
}
