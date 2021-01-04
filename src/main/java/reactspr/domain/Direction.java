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
 * An Direction
 */
@Entity
@Table(name = "Direction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Direction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long cdir;

    @Column(name = "intdir")
    private String intdir;

    @Column(name = "type")
    private Integer type;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getCdir() {
        return cdir;
    }

    public void setCdir(Long cdir) {
        this.cdir = cdir;
    }

    public String getIntdir() {
        return intdir;
    }

    public void setIntdir(String intdir) {
        this.intdir = intdir;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Direction [cdir=" + cdir + ", intdir=" + intdir + ", type=" + type + "]";
    }

}
