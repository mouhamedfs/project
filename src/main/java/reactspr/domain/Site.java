package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * A Site
 */
@Entity
@Table(name = "Site")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Site implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(name="code_site")
    private String codesite;

    @Column(name = "int_site")
    private String intSite;

    @Column(name = "code_guichet")
    private Integer codeGuichet;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getCodesite() {
        return codesite;
    }

    public void setCodesite(String codesite) {
        this.codesite = codesite;
    }

    public String getIntSite() {
        return intSite;
    }

    public void setIntSite(String intSite) {
        this.intSite = intSite;
    }

    public Integer getCodeGuichet() {
        return codeGuichet;
    }

    public void setCodeGuichet(Integer codeGuichet) {
        this.codeGuichet = codeGuichet;
    }

    @Override
    public String toString() {
        return "Site [codeGuichet=" + codeGuichet + ", codesite=" + codesite + ", intSite=" + intSite + "]";
    }
}
