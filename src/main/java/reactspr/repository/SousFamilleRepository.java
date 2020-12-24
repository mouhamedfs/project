package reactspr.repository;
import reactspr.domain.SousFamille;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data repository for the SousFamille entity.
 */
@Repository
public interface SousFamilleRepository extends JpaRepository<SousFamille, String> {
}
