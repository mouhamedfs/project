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
 * A Service
 */
@Entity
@Table(name = "Service")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Service implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long cserv;

    @Column(name = "intserv")
    private String intserv;

    @Column(name = "cdir")
    private Integer cdir;

    @Column(name = "type")
    private Integer type;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getCserv() {
        return cserv;
    }

    public void setCserv(Long cserv) {
        this.cserv = cserv;
    }

    public String getIntserv() {
        return intserv;
    }

    public void setIntserv(String intserv) {
        this.intserv = intserv;
    }

    public Integer getCdir() {
        return cdir;
    }

    public void setCdir(Integer cdir) {
        this.cdir = cdir;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Service [cdir=" + cdir + ", cserv=" + cserv + ", intserv=" + intserv + ", type=" + type + "]";
    }

    

}
