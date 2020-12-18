package reactspr.repository;
import reactspr.domain.Immobilisation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Spring Data  repository for the Personne entity.
 */
@Repository
public interface ImmobilisationRepository extends JpaRepository<Immobilisation, Long> {
    Page<Immobilisation> findAll(Pageable pageable);
}
