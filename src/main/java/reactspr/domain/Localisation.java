package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * A Localisation.
 */
@Entity
@Table(name = "Localisation")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Localisation implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(length = 50)
    private String codeLocal;

    @Column(name = "age")
    private Integer age;

    @Column(name = "int_local")
    private String intLocal;

    @Column(name = "code_site")
    private String codeSite;

    @Column(name = "codeservice")
    private String codeService;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getCodeLocal() {
        return codeLocal;
    }

    public void setCodeLocal(String codeLocal) {
        this.codeLocal = codeLocal;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getIntLocal() {
        return intLocal;
    }

    public void setIntLocal(String intLocal) {
        this.intLocal = intLocal;
    }

    public String getCodeSite() {
        return codeSite;
    }

    public void setCodeSite(String codeSite) {
        this.codeSite = codeSite;
    }

    public String getCodeService() {
        return codeService;
    }

    public void setCodeService(String codeService) {
        this.codeService = codeService;
    }

    @Override
    public String toString() {
        return "Localisation [age=" + age + ", codeLocal=" + codeLocal + ", codeService=" + codeService + ", codeSite="
                + codeSite + ", intLocal=" + intLocal + "]";
    }

    
}
